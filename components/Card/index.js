import styled from "styled-components";

const CardBox = styled.div`
    position: relative;
    width: 270px; /* Remove for full width */
    height: 510px; /* Remove for full width */
    margin: 30px 0px;
    box-shadow: 0 0 20px rgba(0,0,0, .3);
    border-radius:2%;

    .card-header{
        position: relative;
        height: 232px;
        background-size: cover;
        // background-size: contain;
        background-position: top center;
        background-repeat: no-repeat;
        background-color: black;
      }
      .card-header:after{
        content:'';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgb(5,85,134), rgba(181,181,181, 0.1));
      }
      
      .card-header-bar{
        position: absolute;
        top:0;
        width: 100%;
        z-index: 1;
        width: 100%;
      }
      
      .sr-only{
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0,0,0,0);
        border: none;
        overflow: hidden;
      }
      .btn-message{
        display: inline-block;
        background: url(https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077483/profile-card/images/message.svg) no-repeat;
        width: 19.37px;
        height: 16.99px;
        margin-right:10px;
        margin-top:10px;
        float: right;
      }
      .btn-menu{
        display: inline-block;
        background: url(https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077483/profile-card/images/menu.svg) no-repeat;
        width: 19px;
        height: 12.16px;
        margin-left:10px;
        margin-top:10px;
        float: left;
      }
      
      svg .polygon{
        fill: #fff;
      }
      .card-header-slanted-edge{
        position: absolute;
        bottom: -7px;
        z-index: 1;
        width: 100%;
        right:0;
        left:0;
      }
      
      .btn-follow{
        position: absolute;
        top: -15px;
        right: 25px;
        width: 45px;
        height: 45px;
        background: linear-gradient(to left, #007aff, #007aff);
        border-radius:100%;
        box-shadow: 0 10px 15px rgba(110,221,235, .53);
      }
      
      .btn-follow:after{
        content: '>>';
        font-size: 16px;
        color: white;
        position:absolute;
        // background: url(https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077483/profile-card/images/menu.svg) no-repeat;
        // background: url(https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/add.svg) no-repeat;
        width:17px;
        height: 17px;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
      }
      
      .card-body{
        text-align:left;
        padding: 0 22px;
      }
      
      .name{
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: left;
        // margin-left: 22px;
        
      }
      
      .job-title{
        font-size: 14px;
        font-weight: 300;
        margin-top: 5px;
        text-align: right;
        margin-right: 1px;
        color: #919191;
      }
      
      .bio{
        font-size: 14px;
        color: #7B7B7B;
        font-weight: 300;
        margin: 10px auto;
        line-height: 20px;
      }
      
      .social-accounts img{
        width: 15px;
      }
      
      .social-accounts a{
        margin-left: 10px;
      }
      .social-accounts a:first-child{
        margin-left: 0;
      }
      
      .card-footer{
        /*position:fixed; /* Full card width/height */
        position: absolute; /* Fixed card width/height */
      
        left: 0;
        width: 100%;
        bottom: 10px;
        // border-top: 1px solid gray;
      }
      .stat{
        box-sizing: border-box;
        width: calc(100% / 3);
        float: left;
        text-align: center;
        border-left: 1px solid #EBEBEB;
      }
      .stat .label{
        display: block;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 11px;
        letter-spacing: 1px;
        color: #95989A;
      }
      
      .stat .value{
        display: block;
        font-weight: 700;
        font-size:20px;
        margin-top: 5px;
      }

      
`;

const Card = (props) =>{

    const {image, title, description, url, likes} = props;

    return(
        <CardBox>
            <div className="card-header"
                style={{ backgroundImage: `url(${image})`}}
            >
                <div className="card-header-bar">
                {/* <a href="#" className="btn-message"><span className="sr-only">Message</span></a>
                <a href="#" className="btn-menu"><span className="sr-only">Menu</span></a> */}
                </div>

                <div className="card-header-slanted-edge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn-follow"><span className="sr-only">Follow</span></a>
                </div>
            </div>

            <div className="card-body">
                <h2 className="name">{title}</h2>
                {/* <h4 className="job-title">@{user}</h4> */}
                <div className="bio">
                    {description}
                </div>
                {/* <div className="social-accounts">
                    <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt=""/><span className="sr-only">Dribbble</span></a>
                    <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg" alt=""/><span className="sr-only">Twitter</span></a>
                    <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg" alt=""/><span className="sr-only">Instagram</span></a>
                </div> */}
            </div>

            <div className="card-footer">
                <div className="stats">
                    {/* <div className="stat">
                        <span className="label">Following</span>
                        <span className="value">56K</span>
                    </div>
                    <div className="stat">
                        <span className="label">Followers</span>
                        <span className="value">940</span>
                    </div> */}
                    <div className="stat">
                        <span className="label">Likes</span>
                        <span className="value">{likes}</span>
                    </div>
                </div>
            </div>
        </CardBox>
    )
}


export default Card;