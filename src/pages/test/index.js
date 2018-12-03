import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Picker } from '@tarojs/components'
import UcForm from '../../components/form'
import FormItem from '../../components/form-item'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '测试'
  }
  constructor(props) {
    super(props)
    this.state = {
      selector: ['中国', '美国', '巴西', '日本'],
      selectorChecked: '中国',
      timeSel: '12:01',
      dateSel: '2018-04-22'
    }
  }
  componentWillMount() {}

  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}

  handleChange = () => {
    console.log('ccc')
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    console.log(e.detail.value)

    this.setState({
      dateSel: e.detail.value.join('-')
    })
  }
  render() {
    return (
      <View className='test'>
        <Text>test</Text>
        <UcForm>
          <FormItem label='姓名:' labelWidth='50'>
            <Input type='text' placeholder='请输入内容' />
          </FormItem>
          <FormItem label='国家:' labelWidth='50'>
            <Picker
              mode='selector'
              range={this.state.selector}
              onChange={this.onChange}
            >
              <View className='picker'>{this.state.selectorChecked}</View>
            </Picker>
          </FormItem>
          <FormItem label='卡号:' labelWidth='50' icon='warn'>
            <Input type='text' placeholder='请输入卡号' />
          </FormItem>
          <FormItem label='时间:' labelWidth='50'>
            <Picker mode='time' onChange={this.onTimeChange}>
              <View className='picker'>{this.state.timeSel}</View>
            </Picker>
          </FormItem>
          <FormItem label='日期:' labelWidth='50'>
            <Picker
              mode='date'
              value={this.state.dateSel}
              onChange={this.onDateChange}
            >
              <View className='picker'>{this.state.dateSel}</View>
            </Picker>
          </FormItem>
        </UcForm>
      </View>
    )
  }
}
