// 修改名称、分类、封面与视频路径即可更新作品。视频文件放入 public/videos/。
export const profile = {name:'付世杰',english:'Fu Shijie',email:'939512706@qq.com',phone:'19841132875',intro:'毕业于鲁迅美术学院中英数字媒体艺术学院。以平面设计为起点，探索品牌、动态与影像之间的更多可能。'};
export const projects = [
 {id:'tidal',title:'潮间记',subtitle:'把海岛的想象，变成鲜活的角色。',category:'IP 视觉',image:'page-8.webp',pages:[8,9,10,11],video:'',color:'#d9e6dc',description:'围绕海岛生物展开的 IP 视觉探索，以八爪鱼、海兔、海参与海星为原型，构建充满趣味的角色群像。'},
 {id:'ex',title:'EX 科技馆',subtitle:'视觉设计与动态 Logo',category:'品牌设计',image:'page-6.webp',pages:[5,6],video:'',color:'#dee2ca',description:'校企联合实践项目，探索科技馆的品牌核心识别、视觉系统与应用展示。'},
 {id:'a7',title:'A7HIC.N',subtitle:'The Spring / Summer',category:'品牌设计',image:'page-15.webp',pages:[13,14,15,16,17,18,19,20],video:'',color:'#e5e5e4',description:'从品牌标识、文字排版到春夏系列展示，建立统一的视觉语言。'},
 {id:'music',title:'鲁美音乐节',subtitle:'让声音拥有自己的形状。',category:'海报设计',image:'page-23.webp',pages:[23],video:'',color:'#e7e2d8',description:'以色彩、字体与角色图形表达音乐节的节奏与活力。'},
 {id:'tiger',title:'虎虎新风',subtitle:'传统意象，新的表达。',category:'海报设计',image:'page-22.webp',pages:[22],video:'',color:'#e5ddea',description:'以虎为视觉原型，通过图形组合与鲜明色彩展开海报设计。'},
 {id:'robot',title:'机器人',subtitle:'3D 建模与视觉探索',category:'三维设计',image:'page-27.webp',pages:[27],video:'',color:'#dce4ea',description:'围绕机器人形态进行三维建模、材质与场景表达的探索。'},
];
export type Project=typeof projects[number];
