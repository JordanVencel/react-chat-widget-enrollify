const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
}

function Header({ title, subtitle, toggleChat, showCloseButton, titleAvatar }: Props) {
  return (
    <div className="rcw-header">
      {showCloseButton &&
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      }
      {!subtitle &&
        <span className="rcw-banner-title">Ask Any Benefits Question</span>
      }
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      {!subtitle && 
        <span className="rcw-subtitle">powered by enrollif<span className="rcw-ai">AI</span><sup className="rcw-ai-tm">TM</sup></span>
      }
      {subtitle && 
        <span className="rcw-subtitle">{subtitle}</span>
      }
    </div>
  );
}

export default Header;
