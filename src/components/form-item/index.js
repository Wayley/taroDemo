import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import PropTypes from 'prop-types'
import { classNames } from '../../utils/index'

import './index.scss'

class FormItem extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const { label, labelWidth, icon } = this.props
    return (
      <View className='form-item'>
        <View className='form-item-label' style={{ width: labelWidth + 'px' }}>
          {label}
        </View>
        <View className='form-item-content'>{this.props.children}</View>
        <View>
          <Icon size='18' type={icon} />
        </View>
      </View>
    )
  }
}

export default FormItem
