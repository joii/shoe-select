import React, { Component } from "react";
import ThreeSixty from "react-360-view";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default class ChooseShoeColor2 extends Component {
    state = {
      imgSrc: "shoe-tan/base/",
      id: 1,
      body1: "body1",
      body2: "body2",
      body3: "body3",
      upper1: "upper1",
      upper2: "upper2",
      upper3: "upper3",
      heel1: "heel1",
      heel2: "heel2",
      heel3: "heel3",
      flag: 0,
      logID: "",
      logBID: "body1",
      logUID: "upper1",
      logHID: "heel1",
      logRID: "rim1",
      logAID: "accessory1",
      wFlag: 0,
    };
  
    shoeList= [
      {
        id: 1,
        title: "Tan",
        type: "loafer",
        srcImg: "shoe-tan/base/",
        color: "Tan",
        price: "2,550",
        bodys: [
          {
            idBody: 1,
            srcImg: "shoe-tan/base/",
          },
          {
            idBody: 2,
            srcImg: "shoe-tan/body-green/",
          },
          {
            idBody: 3,
            srcImg: "shoe-tan/body-black/",
          },
        ],
        uppers: [
          {
            idUpper: 1,
            srcImg: "shoe-tan/base/",
          },
          {
            idUpper: 2,
            srcImg: "shoe-tan/upper-green/",
          },
          {
            idUpper: 3,
            srcImg: "shoe-tan/upper-black/",
          },
        ],
        heels: [
          {
            idHeel: 1,
            srcImg: "shoe-tan/base/",
          },
          {
            idHeel: 2,
            srcImg: "shoe-tan/heel-green/",
          },
          {
            idHeel: 3,
            srcImg: "shoe-tan/heel-black/",
          },
        ],
        rims: [
          {
            idRim: 1,
            srcImg: "shoe-tan/base/",
          },
          {
            idRim: 2,
            srcImg: "shoe-tan/rim-green/",
          },
          {
            idRim: 3,
            srcImg: "shoe-tan/rim-black/",
          },
        ],
        accessories: [
          {
            idAccessory: 1,
            srcImg: "shoe-tan/base/",
          },
          {
            idAccessory: 2,
            srcImg: "shoe-tan/accessory-green/",
          },
          {
            idAccessory: 3,
            srcImg: "shoe-tan/accessory-black/",
          },
        ],
      },
    ];


    rendershoeList= (id) => {
      return this.shoeList
        .filter((shoe) => shoe.id === id)
        .map((shoe, index) => {
          const {
            color,
            price,
          } = shoe;

          return (
            <table className="table table-bordered" key={index}>
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{color}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>${price}</td>
                </tr>
               
              </tbody>
            </table>
          );
        });
    };

    handleChangeColor = (cid) => {
      const {id, flag, logID, logBID , logUID, logHID, logRID, logAID} = this.state;
      let custom_base="";
      this.setState({
        id:cid,
      })
      document.getElementById("shoeDefault").style.display = "none";

      

      if (flag === 0) {
        this.setState({
          flag: 1,
          logID: cid,
        });
      } else {
        this.setState({
          logID: cid,
        });
      }
      document.getElementById(`c${cid}`).style.display = "block";
      switch(cid){
        case 1: custom_base="Base :Tan"; break;
        case 2: custom_base="Base :Black"; break;
        case 3: custom_base="Base :Brown"; break;
        case 4: custom_base="Base :Gray"; break;

      }
      document.getElementById(`choose-color`).innerHTML = custom_base;
      switch (cid) {
        case 1:
          this.setState({
            body1: "body1",
            body2: "body2",
            body3: "body3",
            upper1: "upper1",
            upper2: "upper2",
            upper3: "upper3",
            heel1: "heel1",
            heel2: "heel2",
            heel3: "heel3",
            rim1: "rim1",
            rim2: "rim2",
            rim3: "rim3",
            accessory1: "accessory1",
            accessory2: "accessory2",
            accessory3: "accessory3",
          });
          break;
        case 2:
          this.setState({
            body1: "body4",
            body2: "body5",
            body3: "body6",
            upper1: "upper4",
            upper2: "upper5",
            upper3: "upper6",
            heel1: "heel4",
            heel2: "heel5",
            heel3: "heel6",
            rim1: "rim4",
            rim2: "rim5",
            rim3: "rim6",
            accessory1: "accessory4",
            accessory2: "accessory5",
            accessory3: "accessory6",
          });
          break;
        case 3:
          this.setState({
            body1: "body7",
            body2: "body8",
            body3: "body9",
            upper1: "upper7",
            upper2: "upper8",
            upper3: "upper9",
            heel1: "heel7",
            heel2: "heel8",
            heel3: "heel9",
            rim1: "rim7",
            rim2: "rim8",
            rim3: "rim9",
            accessory1: "accessory7",
            accessory2: "accessory8",
            accessory3: "accessory9",
          });
          break;
        case 4:
          this.setState({
            body1: "body10",
            body2: "body11",
            body3: "body12",
            upper1: "upper10",
            upper2: "upper11",
            upper3: "upper12",
            heel1: "heel10",
            heel2: "heel11",
            heel3: "heel12",
            rim1: "rim10",
            rim2: "rim11",
            rim3: "rim12",
            accessory1: "accessory10",
            accessory2: "accessory11",
            accessory3: "accessory12",
          });
          break;
      }

     
    };
    renderShoe360 = () => {
      return this.shoeList.map((shoe) => {
        return (
          <div
            className="shoeContent"
            id={`c${shoe.id}`}
            style={{ display: "none" }}
          >
            <ThreeSixty
              amount={8}
              imagePath={`./img/${shoe.srcImg}`}
              fileName="shoe-{index}.png"
            />
          </div>
        );
      });
    };

     // Body

     renderShoeBody360 = () => {
      let id = 0;
      return this.shoeList.map((shoe) => {
        return shoe.bodys.map((body) => {
          id++;
          return (
            <div className="shoeContent" id={`body${id}`} style={{ display: "none" }}>
              <ThreeSixty
                amount={8}
                imagePath={`./img/${body.srcImg}`}
                fileName="shoe-{index}.png"
              />
            </div>
          );
        });
      });
    };
    renderShoeBody = (wID) => {
      const {logID, logBID , logUID, logHID, logRID, logAID,wFlag} = this.state;
      let custom_body="";

      document.getElementById(`${logAID}`).style.display = "none";
      document.getElementById(`${logRID}`).style.display = "none";
      document.getElementById(`${logHID}`).style.display = "none";
      document.getElementById(`${logUID}`).style.display = "none";
      document.getElementById(`${logBID}`).style.display = "none";
      document.getElementById(`c${logID}`).style.display = "none";

      if (wFlag === 0) {
        this.setState({
          logBID: wID,
          wFlag: 1,
        });
        
        
      } else {
       
        this.setState({
          logBID: wID,
        });
        
      }
   
      document.getElementById(`${wID}`).style.display = " block";
      switch(wID){
        case 'body1': custom_body="Body :Tan"; break;
        case 'body2': custom_body="Body :Green"; break;
        case 'body3': custom_body="Body :Brown"; break;

      }
      document.getElementById(`choose-body`).innerHTML = custom_body;

     /* document.getElementById(`debug_flag`).innerHTML = wFlag;
      document.getElementById(`debug_logID`).innerHTML = logID;
      document.getElementById(`debug_logUID`).innerHTML = logUID;
      document.getElementById(`debug_logHID`).innerHTML = logHID;
      document.getElementById(`debug_logBID`).innerHTML = logBID;*/

    };

    // Upper

    renderShoeUpper360 = () => {
      let id = 0;
      return this.shoeList.map((shoe) => {
        return shoe.uppers.map((upper) => {
          id++;
          return (
            <div className="shoeContent" id={`upper${id}`} style={{ display: "none" }}>
              <ThreeSixty
                amount={8}
                imagePath={`./img/${upper.srcImg}`}
                fileName="shoe-{index}.png"
              />
            </div>
          );
        });
      });
    };
    renderShoeUpper = (wID) => {
      const {logID, logBID , logUID, logHID, logRID, logAID,wFlag} = this.state;
      let custom_upper = "";
  
      document.getElementById(`${logAID}`).style.display = "none";
      document.getElementById(`${logRID}`).style.display = "none";
      document.getElementById(`${logHID}`).style.display = "none";
      document.getElementById(`${logUID}`).style.display = "none";
      document.getElementById(`${logBID}`).style.display = "none";
      document.getElementById(`c${logID}`).style.display = "none";
      if (wFlag === 0) {
        this.setState({
          logUID: wID,
          wFlag: 1,
        });
        document.getElementById(`${wID}`).style.display = " block";
        
      } else {
        this.setState({
          logUID: wID,
        });
        
      }
      document.getElementById(`${wID}`).style.display = " block";
      switch(wID){
        case 'upper1': custom_upper="Upper :Tan"; break;
        case 'upper2': custom_upper="Upper :Green"; break;
        case 'upper3': custom_upper="Upper :Brown"; break;

      }
      document.getElementById(`choose-upper`).innerHTML = custom_upper;
    };

    // Heel

    renderShoeHeel360 = () => {
      let id = 0;
      return this.shoeList.map((shoe) => {
        return shoe.heels.map((heel) => {
          id++;
          return (
            <div className="shoeContent" id={`heel${id}`} style={{ display: "none" }}>
              <ThreeSixty
                amount={8}
                imagePath={`./img/${heel.srcImg}`}
                fileName="shoe-{index}.png"
              />
            </div>
          );
        });
      });
    };
    renderShoeHeel = (wID) => {
      const {logID, logBID , logUID, logHID, logRID, logAID,wFlag} = this.state;
      let custom_heel="";
  
      document.getElementById(`${logAID}`).style.display = "none";
      document.getElementById(`${logRID}`).style.display = "none";
      document.getElementById(`${logHID}`).style.display = "none";
      document.getElementById(`${logUID}`).style.display = "none";
      document.getElementById(`${logBID}`).style.display = "none";
      document.getElementById(`c${logID}`).style.display = "none";
      if (wFlag === 0) {
        this.setState({
          logHID: wID,
          wFlag: 1,
        });
        document.getElementById(`${wID}`).style.display = " block";
        
      } else {
        this.setState({
          logHID: wID,
        });
        
      }
      document.getElementById(`${wID}`).style.display = " block";
      switch(wID){
        case 'heel1': custom_heel="Heel :Tan"; break;
        case 'heel2': custom_heel="Heel :Green"; break;
        case 'heel3': custom_heel="Heel :Brown"; break;

      }
      document.getElementById(`choose-heel`).innerHTML = custom_heel;
    };

     // Rim

     renderShoeRim360 = () => {
      let id = 0;
      return this.shoeList.map((shoe) => {
        return shoe.rims.map((rim) => {
          id++;
          return (
            <div className="shoeContent" id={`rim${id}`} style={{ display: "none" }}>
              <ThreeSixty
                amount={8}
                imagePath={`./img/${rim.srcImg}`}
                fileName="shoe-{index}.png"
              />
            </div>
          );
        });
      });
    };
    renderShoeRim = (wID) => {
      const {logID, logBID , logUID, logHID, logRID, logAID,wFlag} = this.state;
      let custom_rim="";
  
      document.getElementById(`${logAID}`).style.display = "none";
      document.getElementById(`${logRID}`).style.display = "none";
      document.getElementById(`${logHID}`).style.display = "none";
      document.getElementById(`${logUID}`).style.display = "none";
      document.getElementById(`${logBID}`).style.display = "none";
      document.getElementById(`c${logID}`).style.display = "none";
      if (wFlag === 0) {
        this.setState({
          logRID: wID,
          wFlag: 1,
        });
        document.getElementById(`${wID}`).style.display = " block";
        
      } else {
        this.setState({
          logRID: wID,
        });
        
      }
      document.getElementById(`${wID}`).style.display = " block";
      switch(wID){
        case 'rim1': custom_rim="Rim :Tan"; break;
        case 'rim2': custom_rim="Rim :Green"; break;
        case 'rim3': custom_rim="Rim :Brown"; break;

      }
      document.getElementById(`choose-rim`).innerHTML = custom_rim;
    };

    // Accessories

    renderShoeAccessory360 = () => {
      let id = 0;
      return this.shoeList.map((shoe) => {
        return shoe.accessories.map((acc) => {
          id++;
          return (
            <div className="shoeContent" id={`accessory${id}`} style={{ display: "none" }}>
              <ThreeSixty
                amount={8}
                imagePath={`./img/${acc.srcImg}`}
                fileName="shoe-{index}.png"
              />
            </div>
          );
        });
      });
    };
    renderShoeAccessory = (wID) => {
      const {logID, logBID , logUID, logHID, logRID, logAID,wFlag} = this.state;
      let custom_accessory="";
  
      document.getElementById(`${logAID}`).style.display = "none";
      document.getElementById(`${logRID}`).style.display = "none";
      document.getElementById(`${logHID}`).style.display = "none";
      document.getElementById(`${logUID}`).style.display = "none";
      document.getElementById(`${logBID}`).style.display = "none";
      document.getElementById(`c${logID}`).style.display = "none";
      if (wFlag === 0) {
        this.setState({
          logAID: wID,
          wFlag: 1,
        });
        document.getElementById(`${wID}`).style.display = " block";
        
      } else {
        this.setState({
          logAID: wID,
        });
        
      }
      document.getElementById(`${wID}`).style.display = " block";
      switch(wID){
        case 'accessory1': custom_accessory="Accessory :Tan"; break;
        case 'accessory2': custom_accessory="Accessory :Green"; break;
        case 'accessory3': custom_accessory="Accessory :Brown"; break;

      }
      document.getElementById(`choose-accessory`).innerHTML = custom_accessory;
    };


   
 
    // Initial
    
    render() {
      const { id, body1,body2,body3,upper1, upper2, upper3 ,heel1, heel2, heel3,rim1,rim2,rim3,accessory1,accessory2,accessory3} = this.state;
  
      return (
        <div className="container-fluid">
          
         
          <div className="row">
            <div className="col-12 text-left">
            <img src="./img/logo.webp" width="80" />  Loafer Heavy Shoes
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="shoe">
                {this.renderShoe360()}
                {this.renderShoeBody360()}
                {this.renderShoeUpper360()}
                {this.renderShoeHeel360()}
                {this.renderShoeRim360()}
                {this.renderShoeAccessory360()}
                <div id="shoeDefault">
                  <ThreeSixty
                    amount={8}
                    imagePath={`./img/shoe-tan/base/`}
                    fileName="shoe-{index}.png"
                  />
                </div>
              </div>
  
             
            </div>
            <div className="col-6">
               <strong>Your Own Custom Shoes</strong>
               <div id="choose-color"></div>
               <div id="choose-body"></div>
               <div id="choose-upper"></div>
               <div id="choose-heel"></div>
               <div id="choose-rim"></div>
               <div id="choose-accessory"></div>
          

              
               {/*<div>Flag :<span id="debug_flag"></span></div>
               <div>logID :<span id="debug_logID"></span></div>
               <div>logUID :<span id="debug_logUID"></span></div>
               <div>logHID :<span id="debug_logHID"></span></div>
      <div>logBID :<span id="debug_logBID"></span></div>*/}
               
             
            </div>
          </div>
          <div className="row">
          <div className="col-12">
          <Tabs
          defaultActiveKey="base"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          {/* Tab 01 */}
          <Tab eventKey="base" title="01:Base">
            <div className="circle bg-tan item-nav" onClick={() => this.handleChangeColor(1)}>Tan</div>
            <div className="circle bg-black item-nav" onClick={() => this.handleChangeColor(2)}>Black</div>
            <div className="circle bg-brown item-nav" onClick={() => this.handleChangeColor(3)}>Brown</div>
            <div className="circle bg-gray item-nav" onClick={() => this.handleChangeColor(4)}>Gray</div>
          </Tab>
           {/* Tab 02 */}
          <Tab eventKey="body" title="02:Body" >
            <div className="circle bg-tan item-nav" onClick={() => this.renderShoeBody(body1)}>Tan</div>
            <div className="circle bg-green item-nav" onClick={() => this.renderShoeBody(body2)}>Green</div>
            <div className="circle bg-brown item-nav" onClick={() => this.renderShoeBody(body3)}>Brown</div>
         </Tab>
           {/* Tab 03 */}
          <Tab eventKey="upper" title="03:Upper">
            <div className="circle bg-tan item-nav" onClick={() => this.renderShoeUpper(upper1)}>Tan</div>
            <div className="circle bg-green item-nav" onClick={() => this.renderShoeUpper(upper2)}>Green</div>
            <div className="circle bg-brown item-nav" onClick={() => this.renderShoeUpper(upper3)}>Brown</div>
          </Tab>
           {/* Tab 04 */}
          <Tab eventKey="heel" title="04:Heel">
            <div className="circle bg-tan item-nav" onClick={() => this.renderShoeHeel(heel1)}>Tan</div>
            <div className="circle bg-green item-nav" onClick={() => this.renderShoeHeel(heel2)}>Green</div>
            <div className="circle bg-brown item-nav" onClick={() => this.renderShoeHeel(heel3)}>Brown</div>
          </Tab>
           {/* Tab 05 */}
          <Tab eventKey="rim" title="05:Rim" >
            <div className="circle bg-tan item-nav" onClick={() => this.renderShoeRim(rim1)}>Tan</div>
            <div className="circle bg-green item-nav" onClick={() => this.renderShoeRim(rim2)}>Green</div>
            <div className="circle bg-brown item-nav" onClick={() => this.renderShoeRim(rim3)}>Brown</div>
          </Tab>
           {/* Tab 06 */}
          <Tab eventKey="accessory" title="06:Accessories" >
            <div className="circle bg-tan item-nav" onClick={() => this.renderShoeAccessory(accessory1)}>Tan</div>
            <div className="circle bg-green item-nav" onClick={() => this.renderShoeAccessory(accessory2)}>Green</div>
            <div className="circle bg-brown item-nav" onClick={() => this.renderShoeAccessory(accessory3)}>Brown</div>
          </Tab>
        </Tabs> 
          </div>
        </div>
        </div>
      );
    }
  }
  