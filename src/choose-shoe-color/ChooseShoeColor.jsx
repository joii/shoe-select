import React, { Component } from "react";
import ThreeSixty from "react-360-view";

export default class ChooseShoeColor extends Component {
    state = {
      imgSrc: "images-black/images-black-1/",
      id: 1,
      w1: "w1",
      w2: "w2",
      w3: "w3",
      flag: 0,
      logID: "",
      logWID: "w1",
      wFlag: 0,
    };
  
    carList = [
      {
        id: 1,
        title: "Crystal Black",
        type: "Pearl",
        img: "./images/icons/icon-black.jpg",
        srcImg: "images-black/images-black-1/",
        color: "Black",
        price: "19,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        wheels: [
          {
            idWheel: 1,
            srcImg: "images-black/images-black-1/",
          },
          {
            idWheel: 2,
            srcImg: "images-black/images-black-2/",
          },
          {
            idWheel: 3,
            srcImg: "images-black/images-black-3/",
          },
        ],
      },
      {
        id: 2,
        title: "Modern Steel",
        type: "Metallic",
        img: "./images/icons/icon-steel.jpg",
        srcImg: "images-steel/images-steel-1/",
        color: "Steel",
        price: "20,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        wheels: [
          {
            idWheel: 1,
            srcImg: "images-steel/images-steel-1/",
          },
          {
            idWheel: 2,
            srcImg: "images-steel/images-steel-2/",
          },
          {
            idWheel: 3,
            srcImg: "images-steel/images-steel-3/",
          },
        ],
      },
      {
        id: 3,
        title: "Lunar Silver",
        type: "Metallic",
        img: "./images/icons/icon-silver.jpg",
        srcImg: "images-silver/images-silver-1/",
        color: "Silver",
        price: "21,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        wheels: [
          {
            idWheel: 1,
            srcImg: "images-silver/images-silver-1/",
          },
          {
            idWheel: 2,
            srcImg: "images-silver/images-silver-2/",
          },
          {
            idWheel: 3,
            srcImg: "images-silver/images-silver-3/",
          },
        ],
      },
      {
        id: 4,
        title: "Rallye Red",
        type: "Metallic",
        img: "./images/icons/icon-red.jpg",
        srcImg: "images-red/images-red-1/",
        color: "Red",
        price: "22,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        wheels: [
          {
            idWheel: 1,
            srcImg: "images-red/images-red-1/",
          },
          {
            idWheel: 2,
            srcImg: "images-red/images-red-2/",
          },
          {
            idWheel: 3,
            srcImg: "images-red/images-red-3/",
          },
        ],
      },
    ];
    renderCarList = (id) => {
      return this.carList
        .filter((car) => car.id === id)
        .map((car, index) => {
          const {
            color,
            price,
            engineType,
            displacement,
            horsepower,
            torque,
            redline,
          } = car;
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
                <tr>
                  <td>Engine Type</td>
                  <td>{engineType}</td>
                </tr>
                <tr>
                  <td>Displacement</td>
                  <td>{displacement}</td>
                </tr>
                <tr>
                  <td>Horsepower</td>
                  <td>{horsepower}</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>{torque}</td>
                </tr>
                <tr>
                  <td>Redline</td>
                  <td>{redline}</td>
                </tr>
              </tbody>
            </table>
          );
        });
    };
    handleChangeColor = (cid) => {
      const {id, flag, logID, logWID } = this.state;
      this.setState({
        id:cid,
      })
      document.getElementById("carDefault").style.display = "none";
      if (flag === 0) {
        this.setState({
          flag: 1,
          logID: cid,
        });
      } else {
        document.getElementById(`${logWID}`).style.display = "none";
        document.getElementById(`c${logID}`).style.display = "none";
        this.setState({
          logID: cid,
        });
      }
      document.getElementById(`c${cid}`).style.display = "block";
      switch (cid) {
        case 1:
          this.setState({
            w1: "w1",
            w2: "w2",
            w3: "w3",
          });
          break;
        case 2:
          this.setState({
            w1: "w4",
            w2: "w5",
            w3: "w6",
          });
          break;
        case 3:
          this.setState({
            w1: "w7",
            w2: "w8",
            w3: "w9",
          });
          break;
        case 4:
          this.setState({
            w1: "w10",
            w2: "w11",
            w3: "w12",
          });
          break;
      }
    };
    renderCar360 = () => {
      return this.carList.map((car) => {
        return (
          <div
            className="carContent"
            id={`c${car.id}`}
            style={{ display: "none" }}
          >
            <ThreeSixty
              amount={8}
              imagePath={`./img/${car.srcImg}`}
              fileName="civic-{index}.jpg"
            />
          </div>
        );
      });
    };
    renderCarWheel360 = () => {
      let id = 0;
      return this.carList.map((car) => {
        return car.wheels.map((wheel) => {
          id++;
          return (
            <div className="carContent" id={`w${id}`} style={{ display: "none" }}>
              <ThreeSixty
                amount={8}
                imagePath={`./img/${wheel.srcImg}`}
                fileName="civic-{index}.jpg"
              />
            </div>
          );
        });
      });
    };
    renderCarWheel = (wID) => {
      const { logID, logWID, wFlag } = this.state;
  
      document.getElementById(`c${logID}`).style.display = "none";
      document.getElementById(`${logWID}`).style.display = "none";
      if (wFlag === 0) {
        this.setState({
          logWID: wID,
          wFlag: 1,
        });
        document.getElementById(`${wID}`).style.display = " block";
      } else {
        this.setState({
          logWID: wID,
        });
        
      }
      document.getElementById(`${wID}`).style.display = " block";
    };
    
    render() {
      const { id, w1, w2, w3 } = this.state;
  
      return (
        <div className="container-fluid">
          <h1 className="text-center my-4 p-3 mb-2 text-light">
            Choose Car Color
          </h1>
          <div className="row">
            <div className="col-7">
              <div className="car">
                {this.renderCar360()}
                {this.renderCarWheel360()}
                <div id="carDefault">
                  <ThreeSixty
                    amount={8}
                    imagePath={`./img/images-black/images-black-1/`}
                    fileName="civic-{index}.jpg"
                  />
                </div>
              </div>
  
              <div className="card">
                <div className="card-header">
                  <h4 className="text-left">See More LX Features</h4>
                </div>
                <div className="card-body">{this.renderCarList(id)}</div>
              </div>
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-header text-primary">Exterior Color</div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                    onClick={() => this.handleChangeColor(1)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-black.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        Crystal Black
                      </div>
                    </div>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => this.handleChangeColor(2)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-steel.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        Modern Steel
                      </div>
                    </div>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => this.handleChangeColor(3)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-silver.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        Lunar Silver
                      </div>
                    </div>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => this.handleChangeColor(4)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-red.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        Rallye Red
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-header text-primary">Wheels</div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                    onClick={() => this.renderCarWheel(w1)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-wheel-1.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        18-inch Alloy Wheels
                      </div>
                    </div>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => this.renderCarWheel(w2)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-wheel-2.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        18-inch 15-Spoke Black Alloy Wheels w/ Red Lip
                      </div>
                    </div>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => this.renderCarWheel(w3)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src="./img/icon-wheel-3.jpg" width="60px" alt="" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        18-inch 5-Spoke Black Alloy Wheels
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  