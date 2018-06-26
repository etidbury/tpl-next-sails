import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


const path=require('path')

require('dotenv').config({path:path.resolve(__dirname,"./",".env")});

configure({ adapter: new Adapter() })
