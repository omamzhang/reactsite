

 * layoutPropsMap  <map>  布局对应属性 对应 routes
 * routes  <[routeExt]> 对象-布局路由组合优先级  routes.layout<string> > routes.layouts<Array>
 * ------
 * - layout  pages- Dashboard | Home | 404 | 500 | Login ……
 * - layouts pages- Business | Special | Theme | Active 
 * initRoutes <function> 初始化路由设置，按照layoutMap组合布局路由设置对象
 * 
 * initRoutesCompile <function> 不同的布局路由渲染


### 不同项目的路由设置 核心-逻辑调整为主&样式调整为辅  同一套UI不同的项目集成

### 不同布局的路由设置 核心-样式调整为主&逻辑调整为辅  同一项目不同的业务集成
* type-1: [layout] （样式调整）
* type-2: [path]  layout   [layout]={props}  以路由为维度 routes配置（逻辑调整）

type-1: layout维度设置 
const LayoutRoutes_[KEYWORD]= {
  ...routeProps
}

type-2: routes维度设置 {[keyword]:[...props]}
- step1 路由数据设置
const LayoutPropsMap = {
  default: ['main'],
  sidebar: ['sidebar', 'main'],
  flow: ['header', 'main', 'footer']
}

const routes = [{
  ...routeProps
  ...layoutProps
  layout<boolean|string>  //默认 所有布局均有 | xx,xx,xx部分
  layouts<[layoutKeyword]>
  nav<boolean> // 是否为导航 为导航则展示在菜单栏
  label // 导航信息
}]

- step2 路由分类
const LayoutRoutes = {}; // [layout]:[routes]
initRoutes(routes) {
  // 
  let layoutMap = []; // 不同布局路由
  let layoutDefault = []; // 所有布局通用路由
  routes.forEach((route) => {
     if(route.layout) {
       layoutDefault.push(route);
     }else {
       const layouts = route.layouts;
       layouts.forEach((layout) => {
          let theLayoutMap = layoutMap[layout];
          if(theLayoutMap && theLayoutMap.length) {
            theLayoutMap.push(route)
          } else {
            theLayoutMap= [].concat(route);
          }
       });
     }
  });

  return {layoutMap, layoutDefault};
}

- step3 布局渲染  LayoutRouteRender

initRoutesCompile() {
  render() {

    const { layoutMap, layoutDefault} = initRoutes();
    let routes = Object.assign({}, layoutMap, layoutDefault);
    return <div className='layout-custom'>
      ...routes handle
    </div>
  } 
}