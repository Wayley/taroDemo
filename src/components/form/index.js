import Taro, { Component } from '@tarojs/taro'
import { Form } from '@tarojs/components'
import './index.scss'

class WzForm extends Component {
  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit} onReset={this.formReset} className='form'>
        {this.props.children}
      </Form>
    )
  }
}
export default WzForm
