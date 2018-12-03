import Taro, { Component } from '@tarojs/taro'
import { Form } from '@tarojs/components'
import { isFunction } from '../../utils/index'

import './index.scss'

class UcForm extends Component {
  formSubmit = e => {
    isFunction(this.props.onSubmit) && this.props.onSubmit(e.detail)
  }

  formReset = e => {
    isFunction(this.props.onReset) && this.props.onReset(e.detail)
  }

  render() {
    return (
      <Form
        onSubmit={this.formSubmit}
        onReset={this.formReset}
        className='form'
      >
        {this.props.children}
      </Form>
    )
  }
}
export default UcForm
