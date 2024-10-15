import { lazy } from 'react';
import { useRoutes } from "react-router-dom";
// 
import AuthorizationRoute from "components/Authorization";
// 
const Main = lazy(() => import('components/Layout/main'));
const Home = lazy(() => import('pages/home'));
// 
const Admin = lazy(() => import('components/Layout/admin'));
const Api = lazy(() => import('components/admin/api'));
const AdminBlog = lazy(() => import('components/admin/blog'));
const Category = lazy(() => import('components/admin/category'));
const Tag = lazy(() => import('components/admin/tag'));
// 
const Blog = lazy(() => import('pages/blogs'));
const Login = lazy(() => import('pages/login'));
// 
const Learn = lazy(() => import('pages/learn/layout'));
const Introduction = lazy(() => import('pages/learn/introduction'));
const What = lazy(() => import('pages/learn/what'));
const Prere = lazy(() => import('pages/learn/prerequisite'));
const Method = lazy(() => import('pages/learn/methods'));
const Setup = lazy(() => import('pages/learn/setup'));
const Coding = lazy(() => import('pages/learn/coding'));
const Third = lazy(() => import('pages/learn/third'));
const Webhook = lazy(() => import('pages/learn/webhook'));
const Http = lazy(() => import('pages/learn/http'));
const Dynamic = lazy(() => import('pages/learn/dynamic'));
const Favourite = lazy(() => import('pages/favourite'));
// 
export default () =>
{
  const routes = useRoutes([{
      path: "/",
      element: <Main />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/api-category/:category",
          element: <Home />
        },
        {
          path: "/api/:api-tool",
          element: <Home />
        },
        {
          path: "/favourite",
          element: <Favourite />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: '/learn',
          element: <Learn />,
          children: [
            {
              path: "introduction",
              element: <Introduction />
            },
            {
              path: "what",
              element: <What />
            },
            {
              path: "prerequisite",
              element: <Prere />
            },
            {
              path: "methods",
              element: <Method />
            },
            {
              path: "setup",
              element: <Setup />
            },
            {
              path: "coding",
              element: <Coding />
            },
            {
              path: "third",
              element: <Third />
            },
            {
              path: "webhook",
              element: <Webhook />
            },
            {
              path: "http",
              element: <Http />
            },
             {
              path: "dynamic",
              element: <Dynamic />
            },
          ]
        },
        {
          path: "/:category",
          element: <Home />
        }
      ],
    },
    
    {
      path: '/admin',
      element: <AuthorizationRoute>
        <Admin />
      </AuthorizationRoute>,
      children: [
        {
          path: "api",
          element: <Api />
        },
        {
          path: "blog",
          element: <AdminBlog />
        },
        {
          path: "category",
          element: <Category />
        },
        {
          path: "tags",
          element: <Tag />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    // {
    //   path: "*",
    //   element: <ErrorPage />
    // },
  ]);
  return routes
}