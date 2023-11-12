// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatus = {
  Success: 'SUCCESS',
  Failure: 'FAILURE',
  InProgress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {listBarChart: {}, api: ''}

  componentDidMount() {
    this.setState({
      api: apiStatus.InProgress,
    })
    this.get1()
  }

  get1 = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    // const options = {
    //   method: 'GET',
    // }
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(each => ({
          vaccineDate: each.vaccine_date,
          dose1: each.dose_1,
          dose2: each.dose_2,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(each => ({
          count: each.count,
          gender: each.gender,
        })),
        vaccinationByAge: data.vaccination_by_age.map(each => ({
          age: each.age,
          count: each.count,
        })),
      }
      this.setState({
        listBarChart: updatedData,
        // pieChart: updatedData.vaccinationByGender,
        // pie1: updatedData.vaccinationByAge,
        api: apiStatus.Success,
      })
    } else {
      this.setState({
        api: apiStatus.Failure,
      })
    }
  }

  getLoader = () => (
    <div className="con31" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  getSuccess = () => {
    const {listBarChart} = this.state
    return (
      <>
        <div className="con2">
          <VaccinationCoverage item={listBarChart.last7DaysVaccination} />

          <VaccinationByGender item={listBarChart.vaccinationByGender} />

          <VaccinationByAge item={listBarChart.vaccinationByAge} />
        </div>
      </>
    )
  }

  getFailure = () => (
    <div className="h12">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="img21"
      />
      <h1 className="h11">Something went wrong</h1>
    </div>
  )

  renderProducts = () => {
    const {api} = this.state
    switch (api) {
      case apiStatus.InProgress:
        return this.getLoader()
      case apiStatus.Success:
        return this.getSuccess()
      case apiStatus.Failure:
        return this.getFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="container1">
        <div className="one">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="img1"
          />
          <p className="para">Co-win</p>
        </div>
        <h1 className="para1">CoWIN Vaccination in India</h1>
        {/* {this.get1()} */}
        {this.renderProducts()}
      </div>
    )
  }
}
export default CowinDashboard
