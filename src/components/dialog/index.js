import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import Mask from '../../components/mask'
import { isFunction } from '../../utils/index'
import './index.scss'

class GoodsList extends Component {
  static propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    btns: PropTypes.array
  }

  static defaultProps = {
    show: false,
    title: '温馨提示',
    content: '',
    cancelName: '取消',
    confirmName: '确定'
  }

  gotoDetail = e => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`
    })
  }
  handleCancel = () => {
    if (isFunction(this.props.onCancel)) {
      this.props.onCancel()
    } else {
      console.log('--', this.props.onCancel)
    }
  }
  handleConfirm = () => {
    if (isFunction(this.props.onConfirm)) {
      this.props.onConfirm()
    } else {
      console.log('--', this.props.onConfirm)
    }
  }
  render() {
    const { show, title, cancelName, confirmName } = this.props
    return (
      <View>
        {show && (
          <View>
            <Mask show />
            <View className='dialog'>
              <View className='dialog-title'>{title}</View>
              <View className='dialog-content'>{this.props.children}</View>
              <View className='dialog-footer'>
                <View className='dialog-btn' onClick={this.handleCancel}>
                  {cancelName}
                </View>
                <View className='separator' />
                <View
                  className='dialog-btn dialog-btn-ok'
                  onClick={this.handleConfirm}
                >
                  {confirmName}
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }
}

export default GoodsList
