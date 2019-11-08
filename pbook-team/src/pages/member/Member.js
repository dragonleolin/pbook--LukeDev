import React from 'react'
import Sidebar from '../../components/member/Sidebar'
import Edit from './Edit'
import Info from './Info'
import {Row} from 'react-bootstrap'
import Navbar from '../../components/member/Navbar'
class Member extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <Row>
          <div className="col">
            <Navbar />
            <div className="row">
              <Sidebar />
              {/* <Edit /> */}
              <Info />
            </div>
          </div>
        </Row>
      </>
    )
  }
}
export default Member
