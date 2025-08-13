declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { 
        url: string;
        parentElement?: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
      initInlineWidget: (options: { 
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    };
  }
}

export {};
