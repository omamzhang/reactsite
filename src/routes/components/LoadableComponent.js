/**
 * 代码分割-异步依赖包（react-loadable）
 * --------------------------
 * 用法示例
 *  const HomePage = PageLoadable(() => import('pages/home/index.js'), {...otherProps});
 *  <Route component={HomePage}/>
 */
// - deps  loading
import Loadable from 'react-loadable';
import Loading from 'components/widgets/loading';

export default function PageLoadable(loader, params) {
  let options = Object.assign({
    loader: loader,
    loading: Loading
  }, params );
  return Loadable(options);
}

// - custom async 
/* 
import asyncComponent from './components/AsyncComponent';

export default function PageLoadable(loader, params) {
  return asyncComponent(loader);
}
 */