import windIcon from '@/assets/image-1.png'
import humidityIcon from '@/assets/image-2.png'
import rainIcon from '@/assets/image-3.png'

const conditions = {
  'Vento': {'label':'Km/h', 'imgSrc': windIcon},
  'Umidade': {'label':'%', 'imgSrc': humidityIcon},
  'Chuva': {'label':'%', 'imgSrc': rainIcon},
}

export { conditions }
