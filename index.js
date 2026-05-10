
const input_projet=get_element('.input_projet');


const input_task=get_element('.taches_input');

const tache_priority=get_element('select');

const consteneur=get_element('aside');

const consteneur_tasks=get_element('.contenteur_tasks');

const conteneur_projet=consteneur.querySelector('div');
const menu_elements=document.querySelectorAll('.menu_item')
const menu_item0=get_element('.menu_item0');
const menu_item1=get_element('.menu_item1');
const menu_item2=get_element('.menu_item2');
const displayed_projet=get_element('.displayed_project');
const switch_projet=get_element('.switch_projet')

const state = {
    data : [],      //stokage de la base dans la ram pour ne pas manipuler le localstock
    current :'',    //on manipule seulement le projet voulu,evite de manipuler data
    dragged : null,
    tasks:[
        {id:0,
        title:'a faire',
         colonne: [],
        disp:'dispo'
        },
         {id:1,
              title:'en cours',
         colonne : [],
         disp:''
        },
         {id:2,
              title:'termines ✔✔✔',
         colonne : [],
          disp:''
        }
    ]

};


function get_element(element){
    return document.querySelector(element);
};
function change_menu_item(show_menu){
    delete_classes()
show_menu.classList.add('current_menu')
const project=getActive()
project.tasks.forEach(element=>{
  element.disp='';
})
}
function delete_classes(){
    menu_elements.forEach(ele=>{
        if(ele.classList.contains('current_menu')){
            ele.classList.remove('current_menu')
        }
    })
}

function create_element(element){
    return document.createElement(element);
};


function first_open(){
return JSON.parse(localStorage.getItem('first'))||'true';
}
// etat iniatial 

function unit(){
    load()
    if(state.data.length===0){
       default_projet();}
    else{
      
        state.current=state.data[0].id;
        change_menu_item(menu_item0);
        state.data[0].tasks[0].disp='dispo';
    }
    render()
    blind()
};


function load(){
    state.data = JSON.parse(localStorage.getItem('data')) || [] ;
};

function save(){
    localStorage.setItem('data',JSON.stringify(state.data));
};

function default_projet(){

const first_time = first_open() == 'true';
if(first_time){
    const new_projet =
        {
        name:'principal',         //if the user doesn't use the app yet; default projet
        current:Date.now() ,        //is suggested to him for preventing empty app at the first look
        tasks: [...state.tasks],

        };
    state.data.push(new_projet);
    state.current=new_projet.id;
    
};
save();
};



function render(){
    //  consteneur.classList.remove('show_aside')
    while(consteneur_tasks.firstElementChild){consteneur_tasks.firstElementChild.remove()}
conteneur_projet.innerHTML = '';

render_projet();
render_tasks();
};


function render_projet(){

state.data.forEach(element => {
const supprimer = create_element('button');
const project_div = creat_projet(element,supprimer)
const id=state.data.indexOf(element);
conteneur_projet.appendChild(project_div);
events_on_projets(project_div,supprimer,element,id);

})}


function events_on_projets(project_div,supprimer,element,id){
 supprimer.addEventListener('click',(e)=>{
    e.stopPropagation();
    if( state.current == element.id){
      if(state.data.length === 1){
        delete_projet(id);
        state.current = '';
        localStorage.setItem('first',JSON.stringify('false'))
           return ;
        };
        if(id<=state.data.length-2)
            {state.current=state.data[id+1].id;}
        else{
            state.current=state.data[id-1].id; }  
    };
    delete_projet(id);
});


 project_div.addEventListener('click',(e)=>{
    e.stopPropagation();
    change_current_projet(element);
})
}


function creat_projet(element,supprimer){
const project_div = create_element('div');
const projet_name = create_element('p');
 project_div.classList.add('projet');
 
 project_div.appendChild(projet_name);
 project_div.appendChild(supprimer);
 supprimer.classList.add('delete_btn');
 supprimer.innerText = 'X';
if(element.id===state.current) {
    displayed_projet.innerText=element.name;
    project_div.classList.add('current_projet')};
 projet_name.innerText = element.name;
 return project_div;

};

function change_current_projet(element){
     state.current = element.id;

     render();
};



function render_tasks(){

if(state.data.length !== 0){
    const projet=getActive();
    projet.tasks.forEach(task_column=>{
    const column = creat_culum(task_column);
    const con_tasks = create_element('div');
    con_tasks.classList.add('task_item');
    column.appendChild(con_tasks);
    //creating  each task of task_column and put it in const_tasks
    create_tasks(task_column,con_tasks)
    consteneur_tasks.appendChild(column);
    events(column,task_column,projet)


    })
};


};


function events(column,task_column,projet){
    column.addEventListener('dragover',event=>{
        event.preventDefault(); 
        column.classList.add('drag-over')});

    column.addEventListener('dragleave',()=>{
        column.classList.remove('drag-over')});
        
    column.addEventListener('drop',()=>{
        const element=get_dragging();
        projet.tasks[task_column.id].colonne.push(element);
        projet.tasks[state.dragged.del].colonne.splice(state.dragged.from,1)
        save();
        render();})
};


function get_dragging(){
    const projet = getActive();
    const element=projet.tasks[state.dragged.del].colonne.find(t=>projet.tasks[state.dragged.del].colonne.indexOf(t)===state.dragged.from);
   return element;


};


function creat_culum(current_task){
    
            const column=create_element('div');
           
            const culum_title = create_element('h2');
            culum_title.innerText=current_task.title;
            column.classList.add('task_boite')
            if(current_task.disp=='dispo'){
                column.classList.add('task_disp');}
            column.appendChild(culum_title);
            return column
};


function display_task_menu(colonne,index){
   const div_menu=create_element('div');
   const supprimer=create_element('button');
   const  move_col0=create_element('button');
   const move_col1=create_element('button');
   const move_col2=create_element('button');

   
   div_menu.appendChild(supprimer);
   div_menu.appendChild(move_col0);
   div_menu.appendChild(move_col1);
   div_menu.appendChild(move_col2)

   trie(move_col0,move_col1,move_col2,colonne)

   supprimer.innerText='supprimer';
   move_col0.innerText='a faire';move_col0.classList.add('afaire')
   move_col1.innerText='en cours';move_col1.classList.add('encours')
    move_col2.innerText='termine';move_col1.classList.add('termine')
   supprimer.classList.add('deleteTask');
   move_col2.classList.add('deleteTask');

   menu_events(move_col0,move_col1,move_col2,supprimer,colonne,index)
   
   
   div_menu.classList.add('div_menu');
   return div_menu
}

function trie(move_col0,move_col1,move_col2,colonne){
   if(colonne===0){move_col0.remove()};
   if(colonne===1){move_col1.remove()};
   if(colonne===2){move_col2.remove()}
}


function menu_events(move_col0,move_col1,move_col2,supprimer,colonne,index)

{
const  project=getActive();
    move_col0.onclick=()=>{
        move_to(0,project.tasks[colonne].colonne[index]);    
        deleteTask(colonne,index);
        save()    
    }
    move_col1.onclick=()=>{
         move_to(1,project.tasks[colonne].colonne[index]);  
             deleteTask(colonne,index);
        save()    
    }
     move_col2.onclick=()=>{
         move_to(2,project.tasks[colonne].colonne[index]);  
             deleteTask(colonne,index);
        save()    
    };

    
   supprimer.onclick=()=>{

   deleteTask(colonne,index);

   }


   
   
}

function  create_tasks(tasks,boite){
tasks.colonne.forEach(task=>{
    const menu=create_element('div');
    const task_item=create_element('div');
    const task_name=create_element('h3');
    task_name.innerText=task;
    task_item.appendChild(task_name);
    task_item.appendChild(menu);
    // menu.innerText=".      .";
    menu.classList.add('menu');
    const  div_menu =  display_task_menu(tasks.id,tasks.colonne.indexOf(task));
    menu.appendChild(div_menu);
  
     menu.addEventListener('click' ,essaie)
    function essaie(e){
        e.stopPropagation();
        menu.classList.toggle('hidden');
        let i=0
    const liste=document.querySelectorAll('.div_menu');
    if(div_menu.classList.contains('show')){i=7}

    liste.forEach(div=>{if(div.classList.contains('show'))
        {div.classList.remove('show')}
    })

        if(i===0){div_menu.classList.add('show')}
      
    }

    task_item.classList.add('task');
    task_item.draggable = true;
    
    task_item.ondragstart=()=>{
    state.dragged={from:tasks.colonne.indexOf(task),del:tasks.id};
    task_item.classList.add("dragging");
       
    };


    boite.appendChild(task_item);
    
})

}


function getActive(){
    return state.data.find(projet => projet.id == state.current);
    
};

function move_to(colonne_to,element){
    const project=getActive();
    project.tasks[colonne_to].colonne.push(element);
    render()
}

function blind(){
    const add_button=get_element('.add_projet');
    add_button.addEventListener('click',add_projet);
    const add_tache=get_element('.add_tache');
    add_tache.addEventListener('click',add_task);

    menu_item0.onclick=()=>{
    const is_datas=is_data();
  if(is_datas!=false){
     change_menu_item(menu_item0);
    const  project=getActive();
    project.tasks[0].disp='dispo';
    render()
    }}

      menu_item1.onclick=()=>{
          const is_datas=is_data()
         if(is_datas!=false){
        change_menu_item(menu_item1);
        const  project=getActive();
        project.tasks[1].disp='dispo';
          render()
    }}
    
      menu_item2.onclick=()=>{
                const is_datas=is_data();
            if(is_datas!=false){
    
           change_menu_item(menu_item2);

        const  project=getActive();
        project.tasks[2].disp='dispo';
        render()
    }}





    // menu_elements.forEach(menu_item=>{
    //     menu_item.onclick=()=>{
    //           delete_class(menu_elements,'task_disp');
    //         menu_item.classList.add('task_disp');
    //         render()
    //     }
    // })

    switch_projet.addEventListener('click',(e)=>{
        e.stopPropagation()
        consteneur.classList.toggle('show_aside')
    })

    window.onclick=(e)=>{
        e.stopPropagation()
        render();
         consteneur.classList.remove('show_aside')
    };
};

function is_data(){
      if(state.data.length===0){return false}
}

function add_projet(e){
    e.stopPropagation()
   if(input_projet.value == '') return ;
    const new_d={
        id:Date.now(),
        name:input_projet.value,
        tasks:[...state.tasks]}

            state.data.push(new_d);
    // save();

    state.current=new_d.id;
    change_menu_item(menu_item0);
    new_d.tasks[0].disp='dispo'
    input_projet.value = '';
    
save()
render()
    // change_current_projet(new_d.id)
}


function delete_projet(index){
     state.data.splice(index,1) ;
     save()
     render() ;
};


function deleteTask(task,index){
    const projet=getActive()
    projet.tasks[task].colonne.splice(index,1);
    render()
    save()
}

function add_task(){
    if(input_task.value == '' || state.current == '') return ;
   const projet=getActive();
   projet.tasks[0].colonne.push(input_task.value);
   state.data[state.data.indexOf(projet)]=projet;
   save();
   input_task.value = '';
   render();
}
unit()
// function start(e){
// e.dataTransfer.effectAllowed='move';
// e.dataTransfer.setData('text',e.target.getAttribute('id'))
// };


// function over(){
//     return false
// };


// function drop(e){
// ob=e.dataTransfer.getData('text');
// e.currentTarget.appendChild(document.getElementById(ob));
// e.stopPropagation()
// return false
// };






// sinatique
// bounnerie