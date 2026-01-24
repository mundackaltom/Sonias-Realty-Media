interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export default function LoadingSpinner({ 
  size = 'medium', 
  color = '#CDA274' 
}: LoadingSpinnerProps) {
  const sizeClass = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  }[size];

  return (
    <div className={`${sizeClass} animate-spin`}>
      <div 
        className="w-full h-full border-2 border-transparent border-t-current rounded-full"
        style={{ color }}
      />
    </div>
  );
}