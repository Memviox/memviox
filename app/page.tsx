'use client'

import {

  SquarePen,        // New Chat
  Plus,             // Add/create
  Search,           // Search Chat
  Clock3,           // Recent
  MessageSquare,    // Chats
  FolderPlus,       // New Project
  FolderKanban,     // Projects
  Globe,            // Product Page
  BookOpen,         // Docs
  Settings,         // Settings
  CircleUserRound,  // User/footer
  PanelLeft,        // Sidebar toggle
  ArrowUp,          // Send button

} from "lucide-react";

// <SquarePen size={sizeSquarePen} /> {/* New Chat */}
// <Plus size={sizePlus} /> {/* New Chat */}
// <Search size={sizeSearch} /> {/* Search Chat */}
// <Clock3 size={sizeClock3} /> {/* Recent */}
// <MessageSquare size={sizeMessageSquare} /> {/* Chats */}
// <FolderPlus size={sizeFolderPlus} /> {/* New Project */}
// <FolderKanban size={sizeFolderKanban} /> {/* Projects */}
// <Globe size={sizeGlobe} /> {/* Product Page */}
// <BookOpen size={sizeBookOpen} /> {/* Docs */}
// <Settings size={sizeSettings} /> {/* Settings */}
// <CircleUserRound size={sizeCircleUserRound} /> {/* User/footer */}
// <PanelLeft size={sizePanelLeft} /> {/* Sidebar toggle */}
// <ArrowUp size={sizeArrowUp} /> {/* Send Button */}
  


export default function HomePage() {


    const showOverlay = () => {
        const overlay = document.querySelector('.box-overlay');
        overlay?.classList.remove("hidden")
    }

    const closeOverlay = () => {
        const overlay = document.querySelector('.box-overlay')
        overlay?.classList.add('hidden')
    }

    const sizeSquarePen = 28;
    const sizePlus = 28;
    const sizeSearch = 28;
    const sizeClock3 = 28;
    const sizeMessageSquare = 18;
    const sizeFolderPlus = 28;
    const sizeFolderKanban = 28;
    const sizeGlobe = 18;
    const sizeBookOpen = 18;
    const sizeSettings = 18;
    const sizeCircleUserRound = 56;
    const sizePanelLeft = 28;
    const sizeArrowUp = 28;

    return (
        <>

            <div 
                className="box-overlay hidden" 
                id="box-overlay" 
                onClick={closeOverlay}
             >

                <div className="box" id="box">

                    
                    <a 
                        href="/product-page"
                        className="header-link-productPage-box links-box"
                        id="header-link-productPage links"
                     >
                         Memviox / Product Page
                    </a>

                    <a                         
                        href="/product-page#GEA"
                        className="header-link-check-box links-box"
                        id="header-link-check links"
                     >
                        Already signed up?
                    </a>

                    <a                         
                        href="/product-page#GEA"
                        className="header-link-signup-box links-box"
                        id="header-link-signup links"
                     >
                            Sign Up
                    </a>

                </div>

            </div>

            <div 
                className="home-page" 
                id="home-page"
                onClick={showOverlay}
            >



                <div 
                    className="side-bar" 
                    id="side-bar"
                 >

                    <div 
                        className="side-bar-top" 
                        id="side-bar-top"
                     >

                        <a href="/product-page" className="side-bar-top-title" id="side-bar-top-title" onClick={(e) => e.stopPropagation()}>Memviox</a>
                        <PanelLeft size={sizePanelLeft} /> {/* Sidebar toggle */}

                    </div>


                    <div 
                        className="side-bar-options"
                        id="side-bar-options"
                     >

                        <button 
                            className="new-chat options-option"
                            id="new-chat"
                        >

                            <SquarePen size={sizeSquarePen} /> {/* New Chat */}
                            New Chat

                        </button>

                        <button 
                            className="new-project options-option"
                            id="new-project"
                        >

                            <FolderPlus size={sizeFolderPlus} /> {/* New Project */}
                            New Project

                        </button>

                        <button 
                            className="search-chat options-option"
                            id="search-chat"
                        >

                            <Search size={sizeSearch} /> {/* Search Chat */}
                            Search Chat's

                        </button>

                    </div>

                    <div 
                        className="side-bar-projects"
                        id="side-bar-projects"
                     >

                        <h1 className="side-bar-projects-title" id="side-bar-projects-title">
                            <FolderKanban size={sizeFolderKanban} /> {/* Projects */}
                            Projects
                        </h1>

                        <button 
                            className="side-bar-projects-add-project" 
                            id="side-bar-projects-add-project"
                        >

                            <FolderPlus size={sizeFolderPlus} /> {/* New Project */}
                            Add Project

                        </button>

                    </div>

                    <div 
                        className="side-bar-recent-chats"
                        id="side-bar-recent-chats"
                     >

                        <h1 className="side-bar-recent-chats-title" id="side-bar-recent-chats-title">
                            <Clock3 size={sizeClock3} /> {/* Recent */}
                            Recent Chats
                        </h1>

                        <button 
                            className="side-bar-recent-chats-add-chat" 
                            id="side-bar-recent-chats-add-chat"
                        >

                            <SquarePen size={sizeSquarePen} /> {/* New Chat */}
                            Add Chat

                        </button>



                    </div>

                    <div 
                        className="side-bar-footer"
                        id="side-bar-footer"
                    >

                        <div className="side-bar-footer-account" id="side-bar-footer-account">

                            {/* <img 
                                src={user.src} 
                                alt="" 
                                className="side-bar-footer-pfp" 
                                id="side-bar-footer-pfp"
                            /> */}

                            <CircleUserRound size={sizeCircleUserRound} />  {/* User/footer */}


                            <h1 className="side-bar-footer-username" id="side-bar-footer-username">
                                UserName
                            </h1>

                        </div>

                    </div>

                </div>


                <div className="main-body">

                    <div 
                        className="header"
                        id="header"
                    >


                        <div className="header-link-productPage-div links-div" id="header-link-productPage-div links-div">


                            <a 
                                href="/product-page"
                                className="header-link-productPage links"
                                id="header-link-productPage links"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Memviox / Product Page
                            </a>

                            {/* <p className="header-link-productPage-details link-details" id="header-link-productPage-details link-details">
                            View the full Memviox product page to learn the vision, features, and roadmap behind this workspace preview.
                            </p> */}

                        </div>

                        <div className="signup-divs">

                            <div className="header-link-check-div links-div" id="header-link-check-div links-div">

                                <a                         
                                    href="/product-page#GEA"
                                    className="header-link-check links"
                                    id="header-link-check links"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Already signed up?
                                </a>
                                {/* 
                                <p className="header-link-check-details link-details" id="header-link-check-details link-details"> 
                                Continue to your account and check whether you are already signed in on this
                                browser.
                                </p> */}

                            </div>

                            <div className="header-link-signup-div links-div" id="header-link-signup-div links-div">

                                <a                         
                                    href="/product-page#GEA"
                                    className="header-link-signup links"
                                    id="header-link-signup links"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Sign Up
                                </a>

                                {/* <p className="header-link-signup-details link-details" id="header-link-signup-details link-details">
                                Join the Memviox waitlist and get early access when the workspace opens.
                                </p> */}

                            </div>

                        </div>

                    </div>

                    <div 
                        className="chat-body"
                        id="chat-body"
                     >



                        <div 
                            className="chat-body-inputs"
                            id="chat-body-inputs"
                        >


                            <div className="chat-body-main" id="chat-body-main">
                                
                                <h1 className="chat-body-main-title" id="chat-body-main-title">

                                    Whats on you'r mind today ???

                                </h1>
                        
                            </div>

                            <div className="chat-body-inputs-input">

                                <Plus size={sizePlus} /> {/* New Chat */}

                                <textarea 
                                    name="" 
                                    id="chat-body-inputs-input-textInput"
                                    className="chat-body-inputs-input-textInput"
                                    placeholder="Ask Memviox Anything"
                                    rows={1}
                                    
                                 >
                                    

                                </textarea>

                                <ArrowUp size={sizeArrowUp} /> {/* Send Button */}

                            </div>

                        </div>
                    </div>

                </div>


            </div>




        </>
    )

}

