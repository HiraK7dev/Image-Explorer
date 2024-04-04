import './Card.css'
import like from '../assets/like.png'

function Card({desc, img, title, likeNum}) {
    return(
        <div id="card">
                <div id='infoBlock'>
                    <div id='info'><i>{desc}</i></div>
                    <img id='imgs' alt='img not found' src={img} />
                </div>
                <div id='countLike'>
                    <div className='titleBar'>{title}</div>
                    <div className='titleBar'><img id='like' src={like} />
                    <p>&nbsp;{likeNum}</p></div>
                </div>
        </div>
    )
}

export default Card