import { useState } from 'react'
import profile_img from '../src_assets/384-original.jpg'

export const CardWithDynamicTheme = () => {
    const [color, setColor] = useState<string>("#ff1756")
    
    const cardBackground = {
        background: `linear-gradient(to bottom, ${color} 110px, #ffffff 110px)`
    }

    const handleColor = (color: string) => {
        setColor(color)
    }

    return(
        <div className="w-full h-screen bg-[#fafafa]">
            <div className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
                <div style={cardBackground} className="w-[320px] h-[420px] rounded-xl py-[50px] shadow-lg text-center tracking-[.5px] font-semibold">
                    <img className="block w-[100px] h-[100px] relative rounded-full m-0 m-auto shadow-[0_0_0_8px_rgb(255,255,255)]" src={profile_img} alt=""/>
                    <h4 
                        style={{color: color}}
                        className="font-mono text-base mt-[15px] mb-[5px]"
                    >
                        Sene
                    </h4>
                    <h5 className="font-mono text-[#454545] font-normal text-sm">Developer?</h5>
                    <div className="w-full mt-[30px] flex justify-around">
                        <div>
                            <h2 className="font-mono font-normal">1.6K</h2>
                            <span 
                                style={{color: color}} 
                                className="font-mono"
                            >
                                Followers
                            </span>
                        </div>
                        <div>
                            <h2 className="font-mono font-normal">852</h2>
                            <span 
                                style={{color: color}}
                                className="font-mono"
                            >
                                Following
                            </span>
                        </div>
                    </div>
                    <div className="w-full mt-[30px] flex justify-around">
                        <button 
                            style={{border: color, background: color}}
                            className={`font-mono w-[130px] py-2 rounded-3xl border-[3px] border-solid text-white`}>Follow</button>
                        <button 
                            style={{border: color, color: color}}
                            className={`font-mono w-[130px] py-2 rounded-3xl border-[3px] border-solid bg-transparent`}>Message</button>
                    </div>
                </div>
                <div className="bg-white p-[20px] mt-[40px] flex justify-around shadow-lg">
                    <button className="w-[25px] h-[25px] border-[3px] border-solid border-[#dddddd] outline-none rounded-full bg-[#3498db]" onClick={() => handleColor('#3498db')}></button>
                    <button className="w-[25px] h-[25px] border-[3px] border-solid border-[#dddddd] outline-none rounded-full bg-[#ff1756]" onClick={() => handleColor('#ff1756')}></button>
                    <button className="w-[25px] h-[25px] border-[3px] border-solid border-[#dddddd] outline-none rounded-full bg-[#1cb65d]" onClick={() => handleColor('#1cb65d')}></button>
                    <button className="w-[25px] h-[25px] border-[3px] border-solid border-[#dddddd] outline-none rounded-full bg-[#8e44ad]" onClick={() => handleColor('#8e44ad')}></button>
                    <button className="w-[25px] h-[25px] border-[3px] border-solid border-[#dddddd] outline-none rounded-full bg-[#f4b932]" onClick={() => handleColor('#f4b932')}></button>
                </div>
            </div>
        </div>
        
    )
}