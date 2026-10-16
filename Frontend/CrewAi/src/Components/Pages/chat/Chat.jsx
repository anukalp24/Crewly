import React from 'react'
import { useState , useEffect } from 'react'
import "./Chat.css"
const Chat = () => {
const [Chat, setChat] = useState("")
const [error, seterror] = useState(null)
const [loader, setloader] = useState(false)
const [data, setdata] = useState([])

const handlechange = (e)=>{
setChat(e.target.value)
}



const handleadd = async()=>{

  try {
    setChat("")
    setloader(true)
  if(!Chat){
   return seterror("Message is required")
    
  }
const req = await fetch(`http://127.0.0.1:8000/chat` , {
  method: "POST",
  headers: {"Content-Type": "application/json" } ,
  body: JSON.stringify({
    question : Chat
  })
}
)

const result = await req.json()
setdata(result.data)


  } catch (error) {
    seterror(error)
  }


  finally{
    setloader(false)
  }

}



  return (

    
    
    <div className="chat-app">
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <a className="chat-brand" href="/">
            <span className="brand-mark">C</span>
            <span>Crew<span className="brand-accent">Ai</span></span>
          </a>

          <button className="icon-button" aria-label="Toggle sidebar">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3.5" y="4" width="17" height="16" rx="3" />
              <path d="M9 4v16" />
            </svg>
          </button>
        </div>

      
        <div className="sidebar-actions">
          <button className="new-chat-button">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>New chat</span>
          </button>

      
        </div>

        <div className="history-container">
          <p className="sidebar-label">YOUR CHATS</p>
          {/* Chat history will be rendered here later. */}
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-divider" />

          <button className="sidebar-action">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
            <span>Help & documentation</span>
          </button>

          <button className="profile-card">
            <div className="profile-avatar">U</div>
            <div className="profile-info">
              <span className="profile-name">Your account</span>
              <span className="profile-plan">CrewAi workspace</span>
            </div>
            <svg className="profile-menu" viewBox="0 0 24 24" fill="none">
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </aside>

      <main className="chat-main">
        <header className="chat-topbar">
          <div className="mobile-brand">
            <span className="brand-mark">C</span>
            <span>Crew<span className="brand-accent">Ai</span></span>
          </div>

          <button className="model-selector">
            <span className="model-status" />
            CrewAi
            <svg viewBox="0 0 24 24" fill="none">
              <path d="m7 10 5 5 5-5" />
            </svg>
          </button>

          <button className="share-button">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 15V3m-5 5 5-5 5 5" />
              <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
            </svg>
            <span>Share</span>
          </button>
        </header>

        <section className="chat-content">
          <div className="welcome-screen">
            <div className="welcome-icon">
              <div className="welcome-icon-inner">C</div>
              <span className="welcome-glow" />
            </div>

          

            <h1>
              What can I help
              <br />
              <span>you build today?</span>
            </h1>

         
          </div>

          {/* Conversation messages will appear here later. */}

   <div className="messages">
  {data?.map((msg, index) =>
    msg.type === "human" ? (
      <div className="message-row human" key={index}>
        <div className="human-message">{msg.content}</div>
      </div>
    ) : (
      <div className="message-row ai" key={index}>
        <div className="ai-avatar">C</div>
        <p className="ai-message">{msg.content}</p>
      </div>
    )
  )}
  {loader && (
    <div className="message-row ai">
      <div className="ai-avatar">C</div>
      <div className="typing">
        <span />
        <span />
        <span />
      </div>
    </div>
  )}
</div>

        </section>
        <footer className="chat-composer-area">
          <div className="chat-composer">
            <textarea value={Chat} onChange={handlechange}
              placeholder="Message CrewAi..."
              rows="1"
              aria-label="Message CrewAi"
            />

            <div className="composer-toolbar">
              <div className="composer-left">
                <button className="composer-tool" aria-label="Attach file">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>

                
              </div>

              <div className="composer-right">
                <span className="composer-hint">Enter to send</span>
                <button onClick={handleadd} className="send-button" aria-label="Send message">

                 
                    
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5m-6 6 6-6 6 6" />
                  </svg>
                   
                                   </button>
              </div>
            </div>
          </div>

          <p className="composer-disclaimer">
            CrewAi can make mistakes. Verify important information.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default Chat
