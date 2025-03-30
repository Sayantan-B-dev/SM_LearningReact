import { useState } from "react"
import {v4 as uuid} from "uuid"
function randomEmoji(){
    const emojiArray = [
        "😀", "😃", "😄", "😁", "😆",
        "😅", "😂", "🤣", "😊", "😇",
        "🙂", "🙃", "😉", "😌", "😍",
        "🥰", "😘", "😗", "😙", "😚"
      ];
    return emojiArray[Math.floor(Math.random()*emojiArray.length)]
}
function EmojiClicker(){
    const [emojis,setEmojis]=useState([{id:uuid(),emoji:randomEmoji()}])
    const addEmoji=()=>{
        setEmojis((oldEmojis)=>[...oldEmojis,{id:uuid(),emoji:randomEmoji()}])
    }
    const deleteEmoji=(id)=>{
        setEmojis((previousEmojis)=>{
            return previousEmojis.filter(e=>e.id!=id)
        })
    }
    const editAllEmoji=()=>{
        setEmojis(previousEmojis=>{
            return previousEmojis.map((e)=>{
                return {...e,emoji:"❤️"}
            })
        })
    }
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",overflowX:"scroll"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
                {emojis.map(e=>(
                    <span 
                    key={e.id} 
                    onClick={()=>deleteEmoji(e.id)} 
                    style={{fontSize:"4rem"}}>
                        {e.emoji}
                    </span>//e is object which is wrong for react
                ))}
            </div>
            <button style={{width:"fit-content"}} onClick={addEmoji}>Add Emoji</button>
            <button style={{width:"fit-content"}} onClick={editAllEmoji}>Make all hearts</button>
        </div>
    )
}
export default EmojiClicker