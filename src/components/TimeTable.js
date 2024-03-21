import React from "react";
import "./TimeTableStyles.css";

function TimeTable() {
  return (
    <div className="containers">
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr className="bg-light-gray">
              <th className="text-uppercase">Time</th>
              <th className="text-uppercase">Monday</th>
              <th className="text-uppercase">Tuesday</th>
              <th className="text-uppercase">Wednesday</th>
              <th className="text-uppercase">Thursday</th>
              <th className="text-uppercase">Friday</th>
              <th className="text-uppercase">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">06:00am</td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                  CrossStart
                </span>
                <div className="margin-10px-top font-size14">06:00-07:00</div>
                <div className="font-size13 text-light-gray">Pierre</div>
              </td>
              <td class="bg-light-gray"></td> {/* makes the event skip*/}
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                  CrossStart
                </span>
                <div className="margin-10px-top font-size14">06:00-07:00</div>
                <div className="font-size13 text-light-gray">Pierre</div>
              </td>
              <td class="bg-light-gray"></td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                  CrossStart
                </span>
                <div className="margin-10px-top font-size14">06:00-07:00</div>
                <div className="font-size13 text-light-gray">Pierre</div>
              </td>
              <td class="bg-light-gray"></td>
            </tr>

            <tr>
              <td class="align-middle">07:00am</td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">07:00-08:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">07:00-08:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">07:00-08:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">07:00-08:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">07:00-08:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td class="bg-light-gray"></td>
            </tr>

            <tr>
              <td class="align-middle">17:00pm</td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">17:00-18:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">17:00-18:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">17:00-18:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">17:00-18:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">17:00-18:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  HeroWOD
                </span>
                <div class="margin-10px-top font-size14">10:00-11:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
            </tr>

            <tr>
              <td class="align-middle">18:00pm</td>
              <td>
                <span class="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  RxClass
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Pierre</div>
                <span class="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  Gymnastic
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>

              <td>
                <span class="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  Weight Lifting
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
                <span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossCardio
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>

              <td>
                <span class="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  RxClass
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Pierre</div>
                <span class="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  Gymnastic
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td>
                <span class="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  Weight Lifting
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
                <span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossCardio
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span class="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  RxClass
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Pierre</div>
                <span class="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  Gymnastic
                </span>
                <div class="margin-10px-top font-size14">18:00-19:00</div>
                <div class="font-size13 text-light-gray">Fedra</div>
              </td>
              <td class="bg-light-gray"></td>
            </tr>

            <tr>
              <td class="align-middle">19:00pm</td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                  CrossStart
                </span>
                <div className="margin-10px-top font-size14">19:00-20:00</div>
                <div className="font-size13 text-light-gray">Pierre</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">19:00-20:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                  CrossStart
                </span>
                <div className="margin-10px-top font-size14">19:00-20:00</div>
                <div className="font-size13 text-light-gray">Pierre</div>
              </td>
              <td>
                <span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                  CrossTraining
                </span>
                <div class="margin-10px-top font-size14">19:00-20:00</div>
                <div class="font-size13 text-light-gray">Alex</div>
              </td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
                  CrossStart
                </span>
                <div className="margin-10px-top font-size14">19:00-20:00</div>
                <div className="font-size13 text-light-gray">Pierre</div>
              </td>
              <td class="bg-light-gray"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimeTable;
