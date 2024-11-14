import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
   <section className="c-wrapper" id='Contact'>
    <div className="paddings innerWidth flexCenter c-container">
        {/*left*/}
        <div className="flexColStart c-left">
        <span className='orangeText'>Our Contact</span>
        <span className='primaryText'>Easy to Contact us</span>
        <span className='secondaryText'>we always ready to help by providing the best service for you, we believe 
            a good place can make your life better</span>

            <div className="flexColStart contactModes ">
                {/*first row */}
                <div className="flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span>Call</span>
                                <span>0708-4780-390</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call now</div>
                    </div>


                    {/*second mode*/}
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span>Chat</span>
                                <span>0708-4780-390</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat now</div>
                    </div>
                </div>

                {/*Second row*/}
                <div className="flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span>Video Call</span>
                                <span>0708-4780-390</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call now</div>
                    </div>


                    {/*fourth mode*/}
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span>Message</span>
                                <span>0708-4780-390</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message now</div>
                    </div>
                </div>
            </div>
        </div>

        {/*Right*/}
        <div className="flexCenter c-right">
            <div className="image-container">
                <img src="./contact2.jpg" alt="" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Contact