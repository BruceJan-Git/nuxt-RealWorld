import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const relTime = (strDate) => {
  return dayjs().from(strDate)
}

Vue.filter('relTime', relTime)
