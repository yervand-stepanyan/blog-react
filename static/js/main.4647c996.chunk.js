(this["webpackJsonpblog-react"]=this["webpackJsonpblog-react"]||[]).push([[0],{75:function(e,t,a){e.exports=a(87)},80:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),s=a.n(o),c=(a(80),a(19)),i=a(29),l=a(8),m=a(7),d=a(9),u=a(10),p=a(11),g=a(16),h=a(32),f=a(26),C=a.n(f),v=a(38);var b=function(e){return r.a.createElement(v.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},E=a(4),x=a(114),S=a(115),N=a(117),O=a(118),I=a(116),j="Blog",y="Create Post",k="Log in",w="Log out",L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleCreatePostClick=function(e){var t=a.props,n=t.isLoggedIn,r=t.handleCreatePostClick;n||r(e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.isLoggedIn;return r.a.createElement(x.a,{position:"static"},r.a.createElement(S.a,{className:a.toolbar},r.a.createElement(g.b,{to:"/blog-react/",className:a.logo},r.a.createElement(I.a,{edge:"start",color:"inherit","aria-label":"blog",onClick:function(t){return e.handleCreatePostClick(!1,t)}},r.a.createElement(b,{fontSize:"large"}),r.a.createElement(N.a,{variant:"h4"},j))),r.a.createElement(g.b,{to:"/blog-react/create",className:a.createPostLink},r.a.createElement(O.a,{className:a.linkBtn,color:"inherit",size:"large",onClick:function(){return e.handleCreatePostClick(!0)}},y)),r.a.createElement(g.b,{to:"/blog-react/auth",className:a.authLink},n?r.a.createElement(O.a,{className:a.linkBtn,size:"large"},w):r.a.createElement(O.a,{className:a.linkBtn,size:"large",onClick:function(){return e.handleCreatePostClick(!1)}},k))))}}]),t}(r.a.Component),P=Object(E.a)({toolbar:{display:"flex",justifyContent:"flex-start"},logo:{color:"white",textDecoration:"none"},createPostLink:{marginLeft:"40px",textDecoration:"none"},authLink:{marginLeft:"auto",textDecoration:"none"},linkBtn:{color:"white"}})(L),U=a(123),A="Log in",T="* Username",D="* Password",J="Log In",W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onUsernameChange=function(e){a.setState({username:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.handleLogIn=function(){var e=a.state,t=e.username,n=e.password,r=a.props,o=r.isLoggedIn,s=r.history,c=r.isCreatePostClicked,i=r.handleCreatePostClick;if(t&&n){var l={username:t.trim(),password:n};a.setState({username:"",password:""},(function(){o(!0,l),c?(s.push("/blog-react/create"),i(!1)):s.push("/blog-react/")}))}},a.state={username:"",password:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,o=this.props.classes;return r.a.createElement("div",{className:o.loginContainer},r.a.createElement("div",{className:o.loginContent},r.a.createElement("div",{className:o.titleSection},r.a.createElement(N.a,{variant:"h4",className:o.title},A)),r.a.createElement("div",null,r.a.createElement("div",{className:o.usernameInput},r.a.createElement(U.a,{id:"standard-basic",label:T,fullWidth:!0,value:a,onChange:function(t){return e.onUsernameChange(t)}})),r.a.createElement("div",{className:o.passwordInput},r.a.createElement(U.a,{id:"standard-password-input",label:D,type:"password",autoComplete:"current-password",fullWidth:!0,value:n,onChange:function(t){return e.onPasswordChange(t)}})),r.a.createElement("div",{className:o.loginBtn},r.a.createElement(O.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:function(){return e.handleLogIn()}},J)))))}}]),t}(r.a.Component),B=Object(h.g)(Object(E.a)({loginContainer:{display:"flex",justifyContent:"center"},loginContent:{width:"50%"},titleSection:{marginTop:"20px"},title:{fontWeight:"bold"},usernameInput:{marginTop:"16px",marginBottom:"8px"},passwordInput:{marginTop:"16px",marginBottom:"8px"},loginBtn:{margin:"30px 0"}})(W)),F="There is no post on web-site.",R="Log in",M=" and be our first story teller.",z="share your story!",Y="You've logged in, ";var G=Object(E.a)({homeContainer:{display:"flex",justifyContent:"center"},homeContent:{width:"50%"},titleSection:{marginTop:"20px",textAlign:"center"},title:{fontWeight:"bold"},textSection:{marginTop:"40px",textAlign:"center"},text:{fontWeight:"bold"}})((function(e){var t=e.classes,a=e.isLoggedIn;return r.a.createElement("div",{className:t.homeContainer},r.a.createElement("div",{className:t.homeContent},r.a.createElement("div",{className:t.titleSection},r.a.createElement(N.a,{variant:"h5",className:t.title},F)),r.a.createElement("div",{className:t.textSection},a?r.a.createElement(N.a,{variant:"h4",className:t.text},Y," ",r.a.createElement(g.b,{to:"/blog-react/create"},z)):r.a.createElement(N.a,{variant:"h4",className:t.text},r.a.createElement(g.b,{to:"/blog-react/auth"},R),M)),r.a.createElement(h.b,{path:"/blog-react/auth"},r.a.createElement(B,null))))})),V=a(119),H=a(120),$=a(28),q=a.n($),K=a(121),Q="Tell us your story!",X=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],Z=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onTitleChange=function(e){a.setState({title:e.target.value})},a.onContentChange=function(e){a.setState({content:e.target.value})},a.onPostAdd=function(){var e=new Date,t=X[e.getMonth()]+" "+e.getDate()+" "+e.getFullYear();a.setState((function(e){return{posts:[{id:e.currentId,title:e.title,content:e.content,date:t,userId:e.currentUserId}].concat(Object(c.a)(e.posts)),currentId:C()(),title:"",content:""}}),(function(){localStorage.setItem("posts",JSON.stringify(a.state.posts)),a.props.handlePostAdd(a.state.posts),a.props.history.push("/blog-react/")}))};var n=C()(),r=JSON.parse(localStorage.getItem("posts"))||[];return a.state={title:"",content:"",posts:r,currentId:n,currentUserId:a.props.currentUserId},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.content,o=this.props.classes;return r.a.createElement("div",{className:o.createPostContainer},r.a.createElement("div",{className:o.createPostContent},r.a.createElement(V.a,{className:o.cardSection},r.a.createElement(H.a,null,r.a.createElement(N.a,{className:o.title,variant:"h6",gutterBottom:!0},Q),r.a.createElement("div",null,r.a.createElement(U.a,{className:o.titleTextField,placeholder:"Write the title...",id:"standard-basic",label:"* Title",value:a,onChange:function(t){return e.onTitleChange(t)}})),r.a.createElement("div",{className:o.contentDiv},r.a.createElement(U.a,{className:o.contentTextField,placeholder:"Write the post...",id:"standard-multiline-static",label:"* Content",multiline:!0,rows:"10",value:n,onChange:function(t){return e.onContentChange(t)}})),r.a.createElement("div",{className:o.btnDiv},r.a.createElement(K.a,{color:"primary",onClick:this.onPostAdd},r.a.createElement(q.a,null)))))))}}]),t}(r.a.Component),_=Object(h.g)(Object(E.a)({createPostContainer:{display:"flex",justifyContent:"center"},createPostContent:{width:"75%"},cardSection:{margin:"20px",boxShadow:"0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"},title:{textAlign:"center"},titleTextField:{width:"75%"},contentDiv:{margin:"16px 0"},contentTextField:{width:"100%"},btnDiv:{display:"flex",justifyContent:"flex-end"}})(Z)),ee=a(2),te="Log out",ae="Are you sure you want to log out?",ne="Log out",re=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){var e=a.props,t=e.isLoggedIn,n=e.isCreatePostClicked,r=e.handleCreatePostClick;t(!1),n&&r(!1)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.logoutContainer},r.a.createElement("div",{className:t.logoutContent},r.a.createElement("div",{className:t.logoutTitleSection},r.a.createElement(N.a,{variant:"h4",className:t.title},te)),r.a.createElement("div",{className:t.logoutText},r.a.createElement(N.a,{variant:"h6"},ae)),r.a.createElement("div",null,r.a.createElement(O.a,{variant:"contained",size:"large",color:"primary",onClick:function(){return e.handleLogOut()}},ne))))}}]),t}(r.a.Component),oe=Object(E.a)({logoutContainer:{display:"flex",justifyContent:"center"},logoutContent:{display:"flex",flexDirection:"column",alignItems:"center",width:"50%"},logoutTitleSection:{margin:"20px 0"},title:{fontWeight:"bold"},logoutText:{margin:"16px 0"}})(re);function se(e){var t=e.component,a=Object(ee.a)(e,["component"]),n=a.isLoggedIn,o=a.path,s=a.handleLogIn,c=a.handleLogOut,i=a.handleCreatePostClick,l=a.isCreatePostClicked,m=a.currentUserId,d=a.handlePostAdd,u=a.posts,p=a.computedMatch;return"/blog-react/auth"===o?n?r.a.createElement(h.b,{path:o},r.a.createElement(oe,{isLoggedIn:c,isCreatePostClicked:l,handleCreatePostClick:i})):r.a.createElement(h.b,{path:o},r.a.createElement(B,{isLoggedIn:s,isCreatePostClicked:l,handleCreatePostClick:i})):n?r.a.createElement(h.b,{path:o},r.a.createElement(t,Object.assign({currentUserId:m,handlePostAdd:d,posts:u},a,{postId:p.params.id}))):r.a.createElement(h.a,{to:{pathname:"/blog-react/auth"}})}var ce=a(45),ie={postContainer:{display:"flex",justifyContent:"center"},cardSection:{width:"75%"},cardWrapper:{margin:"20px",padding:"20px",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},CardContent:{padding:0},titleSection:{display:"flex",padding:"16px 24px"},avatarSection:{margin:"auto 16px auto 0"},avatar:{backgroundColor:ce.a[500]},contentSection:{padding:"16px 24px"},CardActions:{justifyContent:"flex-end"},learnMoreLink:{textDecoration:"none"}},le=a(122),me=a(124);var de=Object(E.a)(ie)((function(e){var t=e.classes,a=e.post,n=a.title,o=a.content,s=a.date,c=a.userId,i=a.id,l=JSON.parse(localStorage.getItem("users")).find((function(e){return e.id===c})),m=l.username[0].toUpperCase();return r.a.createElement("div",{className:t.postContainer},r.a.createElement("div",{className:t.cardSection},r.a.createElement(V.a,{className:t.cardWrapper},r.a.createElement(H.a,{className:t.CardContent},r.a.createElement("div",{className:t.titleSection},r.a.createElement("div",{className:t.avatarSection},r.a.createElement(me.a,{className:t.avatar},m)),r.a.createElement("div",null,r.a.createElement(N.a,{gutterBottom:!0},n),r.a.createElement(N.a,{variant:"subtitle2",color:"textSecondary"},s," by ",l.username))),r.a.createElement("div",{className:t.contentSection},r.a.createElement(N.a,null,o))),r.a.createElement(le.a,{className:t.CardActions},r.a.createElement(g.b,{to:"/blog-react/post/".concat(i),className:t.learnMoreLink},r.a.createElement(O.a,{size:"medium",color:"secondary"},"Learn More"))))))})),ue="Posts",pe=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(d.a)(this,Object(u.a)(t).call(this,e));var n=JSON.parse(localStorage.getItem("posts"))||[];return a.state={posts:n},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.posts,t=this.props.classes;return r.a.createElement("div",{className:t.postsContainer},r.a.createElement("div",{className:t.titleSection},r.a.createElement(N.a,{className:t.title,variant:"h4"},ue)),r.a.createElement("div",{className:t.postSection},r.a.createElement("ul",{className:t.ul},e.map((function(e){return r.a.createElement(de,{key:e.id,post:e})})))))}}]),t}(r.a.Component),ge=Object(E.a)({postsContainer:{display:"flex",flexDirection:"column",alignItems:"center"},titleSection:{margin:"20px"},title:{fontWeight:"bold"},postSection:{width:"100%"},ul:{padding:0,margin:0}})(pe),he={postContainer:{display:"flex",justifyContent:"center"},cardSection:{width:"75%"},cardWrapper:{margin:"20px",padding:"20px",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},CardContent:{padding:0},titleSection:{display:"flex",padding:"16px 24px"},avatarSection:{margin:"auto 16px auto 0"},avatar:{backgroundColor:ce.a[500]},editIcon:{marginLeft:"auto"},contentSection:{padding:"16px 24px"},contentTextField:{width:"100%"},CardActions:{justifyContent:"flex-end"},buttonsSection:{display:"flex"},btnDiv:{marginLeft:"20px"}},fe=a(42),Ce=a.n(fe),ve=a(43),be=a.n(ve),Ee=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onContentChange=function(e){a.setState({content:e.target.value})},a.handleIsEdit=function(){a.onSubmit()},a.onRemove=function(){a.setState((function(e){return{posts:e.posts.filter((function(t){return t.id!==e.post.id})),comments:e.comments.filter((function(t){return t.postId!==e.post.id}))}}),(function(){localStorage.setItem("posts",JSON.stringify(a.state.posts)),localStorage.setItem("comments",JSON.stringify(a.state.comments)),a.props.history.push("/blog-react/")}))},a.onSubmit=function(){a.setState((function(e){return{post:Object(i.a)({},e.post,{content:e.content})}}),(function(){return a.setState((function(e){return{posts:e.posts.map((function(t){return t.id===e.post.id?e.post:t})),isEdit:!e.isEdit}}),(function(){return localStorage.setItem("posts",JSON.stringify(a.state.posts))}))}))};var n=a.props,r=n.posts,o=n.post,s=n.comments,c=n.currentUserId,m=o.content,p=JSON.parse(localStorage.getItem("users")),g=p.find((function(e){return e.id===o.userId}));return a.state={posts:r,post:o,content:m,comments:s,currentUserId:c,users:p,user:g,isEdit:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.content,n=t.isEdit,o=t.user,s=t.currentUserId,c=this.props.classes,i=this.state.post,l=i.title,m=i.date,d=o.username[0].toUpperCase(),u=s===o.id;return r.a.createElement("div",{className:c.postContainer},r.a.createElement("div",{className:c.cardSection},r.a.createElement(V.a,{className:c.cardWrapper},r.a.createElement(H.a,{className:c.CardContent},r.a.createElement("div",{className:c.titleSection},r.a.createElement("div",{className:c.avatarSection},r.a.createElement(me.a,{className:c.avatar},d)),r.a.createElement("div",null,r.a.createElement(N.a,{gutterBottom:!0},l),r.a.createElement(N.a,{variant:"subtitle2",color:"textSecondary"},m," by ",o.username)),r.a.createElement("div",{className:c.editIcon},r.a.createElement(I.a,{onClick:function(){return e.handleIsEdit()},disabled:!u},r.a.createElement(Ce.a,null)))),r.a.createElement("div",{className:c.contentSection},n?r.a.createElement(U.a,{className:c.contentTextField,placeholder:"Write the post...",id:"standard-multiline-static",label:"Post",multiline:!0,rows:"5",value:a,onChange:function(t){return e.onContentChange(t)}}):r.a.createElement(N.a,null,a))),r.a.createElement(le.a,{className:c.CardActions},r.a.createElement("div",{className:c.buttonsSection},r.a.createElement("div",{className:c.btnDiv},r.a.createElement(K.a,{onClick:this.onRemove,disabled:!u,color:"secondary"},r.a.createElement(be.a,null))),r.a.createElement("div",{className:c.btnDiv},r.a.createElement(K.a,{color:"primary",disabled:!n,onClick:this.onSubmit},r.a.createElement(q.a,null))))))))}}]),t}(r.a.Component),xe=Object(h.g)(Object(E.a)(he)(Ee)),Se=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],Ne=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onCommentChange=function(e){a.setState({comment:e.target.value})},a.onCommentAdd=function(){var e=a.state,t=e.currentId,n=e.comment,r=e.userId,o=e.postId,s=new Date,c={id:t,comment:n,date:Se[s.getMonth()]+" "+s.getDate()+" "+s.getFullYear(),userId:r,postId:o};a.setState({comment:"",currentId:C()()},(function(){a.props.onCommentAdd(c)}))};var n=C()();return a.state={comment:"",currentId:n,postId:a.props.post.id,userId:a.props.currentUserId},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.comment,a=this.props.classes;return r.a.createElement("div",{className:a.createCommentContainer},r.a.createElement("div",{className:a.createCommentContent},r.a.createElement("div",{className:a.commentDiv},r.a.createElement(U.a,{className:a.commentTextField,placeholder:"Write the comment...",id:"standard-multiline-static",label:"* Comment",multiline:!0,rows:"4",value:t,onChange:function(t){return e.onCommentChange(t)}})),r.a.createElement("div",{className:a.btnDiv},r.a.createElement(K.a,{color:"primary",onClick:this.onCommentAdd,disabled:!t},r.a.createElement(q.a,null)))))}}]),t}(r.a.Component),Oe=Object(E.a)({createCommentContainer:{display:"flex",justifyContent:"center"},createCommentContent:{width:"75%"},commentDiv:{margin:"16px 0"},commentTextField:{width:"100%"},btnDiv:{display:"flex",justifyContent:"flex-end"}})(Ne),Ie={postContainer:{display:"flex",justifyContent:"center"},cardSection:{width:"75%"},cardWrapper:{margin:"20px",padding:"20px",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},CardContent:{padding:0},titleSection:{display:"flex",padding:"16px 24px"},avatarSection:{margin:"auto 16px auto 0"},avatar:{backgroundColor:ce.a[500]},userSection:{display:"flex",alignItems:"center"},editIcon:{marginLeft:"auto"},commentSection:{padding:"16px 24px"},commentTextField:{width:"100%"},CardActions:{justifyContent:"flex-end"},buttonsSection:{display:"flex"}},je=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onCommentChange=function(e){a.setState({commentText:e.target.value})},a.handleIsEdit=function(){a.onSubmit()},a.onRemove=function(){a.props.onCommentRemove(a.props.comment)},a.onSubmit=function(){a.setState((function(e){return{comment:Object(i.a)({},e.comment,{comment:e.commentText})}}),(function(){return a.setState((function(e){return{comments:e.comments.map((function(t){return t.id===e.comment.id?e.comment:t})),isEdit:!e.isEdit}}),(function(){return localStorage.setItem("comments",JSON.stringify(a.state.comments))}))}))};var n=a.props,r=n.comment,o=n.comments,s=n.currentUserId,c=r.comment,m=JSON.parse(localStorage.getItem("users")),p=m.find((function(e){return e.id===r.userId}));return a.state={comments:o,comment:r,commentText:c,currentUserId:s,users:m,user:p,isEdit:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isEdit,n=t.user,o=t.currentUserId,s=t.commentText,c=this.props.classes,i=this.state.comment.date,l=n.username[0].toUpperCase(),m=o===n.id;return r.a.createElement("div",{className:c.postContainer},r.a.createElement("div",{className:c.cardSection},r.a.createElement(V.a,{className:c.cardWrapper},r.a.createElement(H.a,{className:c.CardContent},r.a.createElement("div",{className:c.titleSection},r.a.createElement("div",{className:c.avatarSection},r.a.createElement(me.a,{className:c.avatar},l)),r.a.createElement("div",{className:c.userSection},r.a.createElement(N.a,{variant:"subtitle2",color:"textSecondary"},i," by ",n.username)),r.a.createElement("div",{className:c.editIcon},r.a.createElement(I.a,{onClick:function(){return e.handleIsEdit()},disabled:!m},r.a.createElement(Ce.a,null)))),r.a.createElement("div",{className:c.commentSection},a?r.a.createElement(U.a,{className:c.commentTextField,placeholder:"Write the comment...",id:"standard-multiline-static",label:"Comment",multiline:!0,rows:"5",value:s,onChange:function(t){return e.onCommentChange(t)}}):r.a.createElement(N.a,null,s))),r.a.createElement(le.a,{className:c.CardActions},r.a.createElement("div",{className:c.buttonsSection},r.a.createElement("div",{className:c.btnDiv},r.a.createElement(I.a,{onClick:this.onRemove,disabled:!m,color:"secondary"},r.a.createElement(be.a,null))),r.a.createElement("div",null,r.a.createElement(I.a,{disabled:!a,onClick:this.onSubmit,color:"primary"},r.a.createElement(q.a,null))))))))}}]),t}(r.a.Component),ye=Object(E.a)(Ie)(je);var ke=Object(E.a)({postsContainer:{display:"flex",flexDirection:"column",alignItems:"center"},postSection:{width:"100%"},ul:{padding:0,margin:0}})((function(e){var t=e.classes,a=e.comments,n=e.currentUserId,o=e.onCommentRemove,s=e.postId,c=a.filter((function(e){return e.postId===s}));return r.a.createElement("div",{className:t.postsContainer},r.a.createElement("div",{className:t.postSection},r.a.createElement("ul",{className:t.ul},c.map((function(e){return r.a.createElement(ye,{key:e.id,comment:e,comments:a,currentUserId:n,onCommentRemove:o})})))))})),we="Post",Le="Comments",Pe=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onCommentAdd=function(e){a.setState((function(t){return{comments:[e].concat(Object(c.a)(t.comments))}}),(function(){localStorage.setItem("comments",JSON.stringify(a.state.comments))}))},a.onCommentRemove=function(e){a.setState((function(t){return{comments:t.comments.filter((function(t){return t.id!==e.id}))}}),(function(){return localStorage.setItem("comments",JSON.stringify(a.state.comments))}))};var n=JSON.parse(localStorage.getItem("posts"))||[],r=n.find((function(e){return e.id===a.props.postId})),o=JSON.parse(localStorage.getItem("comments"))||[];return a.state={posts:n,post:r,comments:o},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.posts,a=e.post,n=e.comments,o=this.props,s=o.classes,c=o.currentUserId,i=o.postId;return r.a.createElement("div",{className:s.postsContainer},r.a.createElement("div",{className:s.titleSection},r.a.createElement(N.a,{className:s.title,variant:"h4"},we)),r.a.createElement("div",{className:s.postSection},r.a.createElement(xe,{key:a.id,post:a,posts:t,comments:n,currentUserId:c})),r.a.createElement("div",{className:s.titleSection},r.a.createElement(N.a,{className:s.title,variant:"h5"},Le)),r.a.createElement("div",{className:s.createCommentSection},r.a.createElement(Oe,{post:a,onCommentAdd:this.onCommentAdd,comments:n,currentUserId:c})),r.a.createElement("div",{className:s.commentsSection},r.a.createElement(ke,{comments:n,currentUserId:c,onCommentRemove:this.onCommentRemove,postId:i})))}}]),t}(r.a.Component),Ue=Object(E.a)({postsContainer:{display:"flex",flexDirection:"column",alignItems:"center"},titleSection:{margin:"10px",alignSelf:"flex-start",marginLeft:"12%"},title:{fontWeight:"bold"},postSection:{width:"100%"},createCommentSection:{width:"75%"},commentsSection:{width:"75%"}})(Pe),Ae=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),Te=Object(h.g)(Ae),De=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleLogIn=function(e,t){var n=t.username,r=t.password,o=a.state.users.find((function(e){return e.username===n&&e.password===r}));o?a.setState((function(t){return{users:t.users.map((function(e){return e.id===o.id?Object(i.a)({},e,{isOnline:!0}):Object(i.a)({},e,{isOnline:!1})})),isLoggedIn:e,currentUserId:o.id}}),(function(){return localStorage.setItem("users",JSON.stringify(a.state.users))})):a.setState((function(t){return{users:[{id:t.currentId,username:n,password:r,isOnline:!0}].concat(Object(c.a)(t.users)),currentId:C()(),isLoggedIn:e,currentUserId:t.currentId}}),(function(){return localStorage.setItem("users",JSON.stringify(a.state.users))}))},a.handleLogOut=function(e){var t=a.state.users.map((function(e){return Object(i.a)({},e,{isOnline:!1})}));a.setState({users:t,isLoggedIn:e},(function(){return localStorage.setItem("users",JSON.stringify(a.state.users))}))},a.handleCreatePostClick=function(e){a.setState({isCreatePostClicked:e})},a.handlePostAdd=function(e){a.setState({posts:e})};var n=JSON.parse(localStorage.getItem("users"))||[],r=C()(),o=JSON.parse(localStorage.getItem("posts"))||[],s=n.some((function(e){return e.isOnline})),m=s?n.find((function(e){return e.isOnline})).id:"";return a.state={isLoggedIn:s,users:n,currentId:r,isCreatePostClicked:!1,currentUserId:m,posts:o},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.isCreatePostClicked,n=e.currentUserId,o=e.posts,s=this.props.classes;return r.a.createElement("div",{className:s.mainContainer},r.a.createElement(g.a,null,r.a.createElement(Te,null,r.a.createElement(P,{isLoggedIn:t,handleCreatePostClick:this.handleCreatePostClick}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(h.a,{to:{pathname:"/blog-react/"}})),r.a.createElement(h.b,{exact:!0,path:"/blog-react/"},o.length>0?r.a.createElement(ge,null):r.a.createElement(G,{isLoggedIn:t})),r.a.createElement(se,{path:"/blog-react/create",isLoggedIn:t,component:_,currentUserId:n,handlePostAdd:this.handlePostAdd}),r.a.createElement(se,{path:"/blog-react/auth",isLoggedIn:t,isCreatePostClicked:a,handleLogIn:this.handleLogIn,handleLogOut:this.handleLogOut,handleCreatePostClick:this.handleCreatePostClick}),r.a.createElement(se,{path:"/blog-react/post/:id",isLoggedIn:t,component:Ue,currentUserId:n,posts:o})))))}}]),t}(r.a.Component),Je=Object(E.a)({mainContainer:{backgroundColor:"#f9f9f9",minHeight:"100vh"}})(De);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.4647c996.chunk.js.map