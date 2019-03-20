import FCC from '../assets/images/FCC.png'
import nibachuangkekongjian from '../assets/images/nibachuangkekongjian.png'
import tulingjiaoyu from '../assets/images/tulingjiaoyu.jpg'
import juejin from '../assets/images/juejin.png'
import pugongying from '../assets/images/pugongying.png'
import freeCodeCamp from '../assets/images/freeCodeCamp.jpg'
import CTC from '../assets/images/C-ThoughtWorks Community.jpg'
import DGDG from '../assets/images/D-GDG-xian.jpg'
import WdShare from '../assets/images/WdShare.png'
import jinshuju from '../assets/images/jinshuju.png'
import huodongxing from '../assets/images/huodongxing.jpg'

import zhangnafei from '../assets/images/nafei_zhang.jpg'
import thl from '../assets/images/thl.jpg'
import whh from '../assets/images/whh.jpg'
import dalao1 from '../assets/images/dalao1.jpg'
import dalao2 from '../assets/images/dalao2.jpg'
import dalao3 from '../assets/images/dalao3.jpg'
import dalao4 from '../assets/images/dalao4.jpg'
import dalao5 from '../assets/images/dalao5.jpg'
import dalao6 from '../assets/images/dalao6.jpg'
import dalao7 from '../assets/images/dalao7.jpg'
import dalao8 from '../assets/images/dalao8.jpg'
import dalao9 from '../assets/images/dalao9.png'

const Config = {
	projectName: 'Platform',
	system: {
		loadingText: '别急,努力加载ing'
	},
	banner: {
		title: '2019西安Web交流大会',
		date: '2019-03-30 10:00 ~ 17:00',
		address: '西安市碑林区南二环西段69号，西安创新设计中心大楼三楼'
	},
	contents: [
		{
			project: '不能永远忽略的 Web Accessibility',
			name: '王丹娜 - ThoughtWorks 咨询师',
			description: '能你会经常看到 Accessibility 这个字眼，可能你会经常看到无障碍这个字眼，但作为一名前端开发工程师，你有没有发现你们的网站是不是少了些什么，真正良好的用户体验你可以怎么做。涉及到的内容：* Web Accessibility 究竟是什么，为什么不能忽略 * 作为一名前端，你需要怎么做 * 项目中 Accessibility 实践分享。',
			isImgLeft: true
		}, {
			project: ' React Hooks 的使用',
			name: '熊彬 - 金数据前端工程师',
			description: '随着 React 16.8 的正式发布，React Hooks 也从提议照进了现实。我们从以前会把数据在每个组件都复写一遍，到开始使用 HOC 来减少代码数量。这一次，React 为我们带来了一个新的解决方案，一起来了解一下 React Hooks。涉及到的内容：* React 高阶组件(Higher-Order Components) * React Render props * React Hooks。',
			isImgLeft: false
		}, {
			project: '使用 Typescript 给 JavaScript 做静态类型检查',
			name: '欧阳英杰 - ThoughtWorks 咨询师',
			description: 'TypeScript，作为 JavaScript 的超集，给 JavaScript 带来了强类型这个非常强大的特性，给前端的开发以及重构带来了很大的便利性。但是，即使 TypeScript 现在已经可以直接使用用 JavaScript 编写的模块了，有很多遗留项目想要立马迁移到 TypeScript 也并非易事。但是好消息是，TypeScript 在 2.3 版本引入了Js Type Checking，从此，不需要任何对于已有代码的侵入，你也可以很好的享受 TypeScript 带来的一些特性了。',
			isImgLeft: true
		}, {
			project: 'Tracup 的前端性能监控实践',
			name: '吴阳 - 蒲公英研发部经理',
			description: '蒲公英为全球 221 个国家和地区超过 200 万开发者提供 SaaS 服务。因为 网络、CDN故障、脚本错误、用户工作环境等原因引起的用户体验变差的情况时有发生，而这些问题在测试阶段很难被发现，为了解决这个问题蒲公英在两年前开始尝试做前端性能的监控。蒲公英的前端监控是从 Tracup 开始的，在前端监控实施的过程中也遇到了一些问题。主要内容：* 前端监控的指标选择(Web,小程序) * 监控数据的收集。',
			isImgLeft: false
		}, {
			project: '从 0 搭建一个前端框架',
			name: '谷中仁 - ThoughtWorks 咨询师',
			description: '作为前端新趋势的 React 和 TypeScript 已经火的不要不要的了，作为前端 er,  我们大多时候用脚手架做项目或者写测试，有木有想过从 0 开始搭建一个呢？本次分享，我将会分享从 0 搭建一个前端框架及其过程中遇到的坑，带你成为"前端架构师"。',
			isImgLeft: true
		}
	],
	corporateSponsor: [
		{
			colNum: 1,
			imgs: [{ url: FCC, className: 'bigImg' }]
		},
		{
			colNum: 1,
			imgs: [{ url: nibachuangkekongjian, className: 'midImg' }]
		},
		{
			colNum: 1,
			imgs: [
				{ url: tulingjiaoyu, className: 'litImgx1' },
				{ url: jinshuju, className: 'litImgx1' },
				{ url: juejin, className: 'midImgx1' },
				{ url: pugongying, className: 'midImgx1' }
			]
		},
		{
			colNum: 2,
			imgs: [
				{ url: freeCodeCamp, className: 'litImgx2' },
				{ url: CTC, className: 'litImgx3' },
				{ url: DGDG, className: 'litImgx3' },
				{ url: WdShare, className: 'litImgx2' }
			]
		},
		{
			colNum: 1,
			imgs: [{ url: huodongxing, className: 'bigImg' }]
		}
	],
	partner: [
		{
			name: 'partner1',
			url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551605167408&di=8f6d081350e8e96c78b46535157fd106&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425171833_4GuNC.jpeg',
			active: 1
		},
		{
			name: 'partner1',
			url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551605167408&di=8f6d081350e8e96c78b46535157fd106&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425171833_4GuNC.jpeg',
			active: 1
		},
		{
			name: 'partner1',
			url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551605167408&di=8f6d081350e8e96c78b46535157fd106&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F25%2F20160425171833_4GuNC.jpeg',
			active: 1
		}
	],

	volunteer: [

		{
			name: 'volunteer1',
			url: zhangnafei,
			active: 1
		},
		{
			name: 'volunteer1',
			url: whh,
			active: 1
		},
		{
			name: 'volunteer1',
			url: thl,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao1,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao2,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao3,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao4,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao5,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao6,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao7,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao8,
			active: 1
		},
		{
			name: 'volunteer1',
			url: dalao9,
			active: 1
		}
	],
}

if (typeof ConfigExt !== 'undefined') {
	Object.assign(Config, ConfigExt)
}

export default Config
