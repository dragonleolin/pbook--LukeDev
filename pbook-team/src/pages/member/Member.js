import React from 'react'
import {Row} from 'react-bootstrap'
import Sidebar from '../../components/member/Sidebar'
import Navbar from '../../components/member/Navbar'


class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <Row style={{marginRight:"0px"}}>
          <div className="col" style={{paddingRight:"0px"}}>
            <Navbar />
            <div className="row" style={{marginRight:"0px"}}>
              <Sidebar />
            </div>
          </div>
        </Row>
      </>
    )
  }
}
export default Member
