import React, { useEffect, useRef } from 'react';

interface SubstackWidgetProps {
  substackUrl: string;
  placeholder?: string;
  buttonText?: string;
  theme?: 'custom' | 'default';
  colors?: {
    primary?: string;
    input?: string;
    email?: string;
    text?: string;
  };
  headerText?: string; // Add a prop for the header text
}

const SubstackWidget: React.FC<SubstackWidgetProps> = ({
  substackUrl,
  placeholder = 'example@gmail.com',
  buttonText = 'Subscribe',
  theme = 'custom',
  colors = {
    primary: "#FFFFFF",
    input: "#000000",
    email: "#FFFFFF",
    text: "#000000",
  },
  headerText = 'Subscribe to my blog', // Default header text
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    (window as any).CustomSubstackWidget = {
      substackUrl,
      placeholder,
      buttonText,
      theme,
      colors,
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).CustomSubstackWidget;
    };
  }, [substackUrl, placeholder, buttonText, theme, colors]);

  return (
    <div>
      <h5 className="text-center mb-4">{headerText}</h5>
      <div id="custom-substack-embed" ref={containerRef}></div>
    </div>
  );
};

export default SubstackWidget;
