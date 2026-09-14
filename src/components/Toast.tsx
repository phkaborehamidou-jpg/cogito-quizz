import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
}

function Toast({ message }: ToastProps) {
  return (
    <div className="toast" role="status">
      <span className="toast-icon">
        <Check size={16} />
      </span>
      {message}
    </div>
  );
}

export default Toast;
