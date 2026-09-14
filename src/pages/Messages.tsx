import { MessageCircleMore } from 'lucide-react';

function Messages() {
  return (
    <>
      <div className="page-heading">
        <h1>Messages</h1>
        <p>Discutez avec les propriétaires</p>
      </div>
      <div className="empty-state">
        <MessageCircleMore size={48} />
        <h2>Aucun message</h2>
        <p>Vos conversations avec les propriétaires apparaîtront ici.</p>
      </div>
    </>
  );
}

export default Messages;

