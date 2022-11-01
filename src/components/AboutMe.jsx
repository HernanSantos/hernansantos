import { AboutMeContainer } from "../styledComponents/AboutMeStyle"
import { SpecialButton } from "../styledComponents/SpecialButtonStyle"

export const AboutMe = () => {

  return (
    <AboutMeContainer id="aboutme">

      <div className="infoContainer">
        <h1>SOBRE MI</h1>
        <hr className="lineTitle"/>
        <div className="imgTextDiv">
          <div className="imgContainer">
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1666642531/pokemon-app/uirx1nw1t8yhn1amqsef.png" 
              alt="avatar" 
            />
            <div className="cv">
              <SpecialButton wsize="lg">
                Ver Cv
              </SpecialButton>
              <SpecialButton wsize="lg">
                Descargar Cv
              </SpecialButton>
            </div>
          </div>
          <div className="textContainer">
            <div className="personalData">
              <p>Nombre y Apellido: Hernán Santos</p>
              <p>Localidad: Lanús Oeste, Buenos Aires</p>
            </div>

            <hr className="hrStyle"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          </div>
        </div>
        <div className="tecnologies">
          <h2>TECNOLOGIAS</h2>
          <hr className="lineTitle"/>
          <div className="imagesContainer">
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1667002389/pokemon-app/d86bhrsbdijzznrlp2ef.png" 
              alt="js"
              className="icon" 
            />
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1667002383/pokemon-app/nj53l8eggjztljpvmjwh.png" 
              alt="js"
              className="icon" 
            />
            <img 
              src="http://res.cloudinary.com/dtfmesfi0/image/upload/v1666649424/pokemon-app/n0bthfbadsbymc5g7c9h.png" 
              alt="js"
              className="icon" 
            />
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1666993259/pokemon-app/stqp9vddcd3myeslmckb.png" 
              alt="js"
              className="icon" 
            />
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1666993268/pokemon-app/rjqs5ag3scuwhyrw0jhy.png" 
              alt="js"
              className="icon" 
            />
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1666993286/pokemon-app/jlc5kbrrmgl82xipobcb.png" 
              alt="js"
              className="icon" 
            />
            <img 
              src="https://res.cloudinary.com/dtfmesfi0/image/upload/v1666993279/pokemon-app/xy0w9mvkvrbpttyezqzy.png" 
              alt="js"
              className="icon" 
            />
          </div>
        </div>
      </div>
    </AboutMeContainer>
  )
}
