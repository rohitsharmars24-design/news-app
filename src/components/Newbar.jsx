import React,{Component} from 'react';
import NewItem from './NewItems';
import Spinner from './Spinnerload';
import result from '../source';
import InfiniteScroll from 'react-infinite-scroll-component';
let he=result;

export default class Newbar extends Component {
     constructor(props){
    super(props)
    this.state={
      articles:result,
      loading:false,
      pageCount:1,
      totalResult:0,
      loading:false,
      hasMore: true,
      errorMsg:"",
      hasMore:true
    }
    document.title=`${this.props.title}-NewsTrigger`
    this.handleNextClicks = this.handleNextClicks.bind(this);
    this.handlePreviousClicks = this.handlePreviousClicks.bind(this);
    this.updateApi=this.updateApi.bind(this);
    this.fetchMoreData=this.fetchMoreData.bind(this);
  }
  
   async updateApi(pageNo){
    this.props.iprogress(0);
     let url=`https://api.currentsapi.services/v1/latest-news?language=${this.props.lang}&country=${this.props.country}&page_size=4&page_number=${pageNo + 1 }&apiKey=${this.props.apikey}`;
    this.setState({loading:true})
    let p= await fetch(url);
    let resp=await p.json();
    this.props.iprogress(40);
    console.log(resp);
    this.props.iprogress(60)
    if(p.status==200){
     
    this.setState({
      
      articles:resp.news,
      loading:false,
      pageCount:this.state.pageCount + pageNo ,
        // page:"&page=" + resp.nextPage
        errorMsg:{
            codeType:"Data of News are opened",
            message:resp.information?.realTimeArticles?.message
          },
        totalResult:this.state.totalResult + resp.news.length,
    },()=>{
       this.props.show("alert-success","Worldwide   "+ this.state.errorMsg?.codeType,this.state.errorMsg?.message)
    setTimeout(()=>{
      this.props.show(null);
    },5000)
    })
   
    }
    else {
  this.setState({
    articles: he,
    loading: false,
    errorMsg: {
      codeType: "Some API problem",
      message: resp.errors?.[0]
    },
    totalResult: he.length
  }, () => {
    
    this.props.show("alert-danger", "OH oh ow " + this.state.errorMsg?.codeType, this.state.errorMsg?.message);
    
    setTimeout(() => {
      this.props.show(null);
    }, 5000);
  });
}



  this.props.iprogress(100);
   }
  
  async componentDidMount(){
    await this.updateApi(0);
    
    
    // let apinfo={
    //   PN0:this.state.pageCount,
    //   Token:resp.nextPage
    // }
    //  let apiarry='';
    // let keystore=localStorage.getItem("apiData");
    // if (keystore==null){
    //   apiarry=[];
    // }
    // else{
    //   apiarry=JSON.parse(keystore);
    // }
    //  const isDuplicate = apiarry.some(item => item.PN0 === apinfo.PN0);
    //  if (!isDuplicate) {
    // apiarry.push(apinfo);

    // localStorage.setItem("apiData",JSON.stringify(apiarry));
    //  }
  }


  async handleNextClicks(){
    console.log("Next button click");
    this.updateApi(+1);
    // let url=`https://newsapi.org/v2/${this.props.country}&apiKey=d94856cd4d634f3bb48bb31911c165ff&page=${this.state.pageCount+1 }&pageSize=4`;
    // this.setState({loading:true})
    // let p= await fetch(url);
    // let resp=await p.json();
    // console.log(resp);
    
    
    // if(p.status==200){
     
    // this.setState({
    //         pageCount:this.state.pageCount + 1
    //       }
    // )
    // }
    
   


  //   let apinfo={
  //     PNO:this.state.pageCount,
  //     Token:resp.nextPage
  //   }
  //   let apiarry='';
  //   let keystore=localStorage.getItem("apiData");
  //   if (keystore==null){
  //     apiarry=[];
  //   }
  //   else{
  //     apiarry=JSON.parse(keystore);
  //   }
   
  //    apiarry.push(apinfo);

  //   localStorage.setItem("apiData",JSON.stringify(apiarry));
  }
    
  








  async handlePreviousClicks(){

    console.log("prev button click");
    this.updateApi(-1);
    // let url=`https://newsapi.org/v2/${this.props.country}&apiKey=d94856cd4d634f3bb48bb31911c165ff&page=${this.state.pageCount-1}&pageSize=4`;
    // this.setState({loading:true})
    // let p= await fetch(url);
    // let resp=await p.json();
    // console.log(resp);
    
    // this.setState({articles:resp.articles,
    //         //  page:resp.nextPage ? "&page=" + resp.nextPage : ""
    //         // page:"&page=" + resp.nextPage,
    //         pageCount:this.state.pageCount - 1,
    //         loading:false
    //        }
    // )
    
  }

  
    // console.log("Previous button click");
    // let apiarry='';
    // let keystore=localStorage.getItem("apiData");
    // if (keystore==null){
    //   apiarry=[];
    // }
    // else{
    //   apiarry=JSON.parse(keystore);
    //   if(apiarry.length>0){
    //   apiarry.pop();
      
    // }
    // localStorage.setItem("apiData",JSON.stringify(apiarry));
    // } 
  
  async fetchMoreData(){
    this.props.iprogress(0);
    this.setState({
      pageCount:this.state.pageCount + 1
    })
     let url=`https://api.currentsapi.services/v1/latest-news?language=${this.props.lang}&country=${this.props.country}&page_size=4&page_number=${this.state.pageCount + 1 }&apiKey=${this.props.apikey}`;
    this.setState({loading:true})
    let p= await fetch(url);
    let resp=await p.json();
    console.log(resp);
     if(p.status==200){
       if (!resp.news || resp.news.length === 0) {
        this.setState({
        hasMore: false,     
        // loading: false
      });
       }
       else{
        this.setState({
      articles:this.state.articles.concat(resp.news),
      totalResult:this.state.totalResult + resp.news.length,
      loading:false
        // page:"&page=" + resp.nextPage
        
    })
       }
    
  }
  else{
     this.setState({
          articles:he,
          loading:false,
          totalResult:he.length
      //  pageCount:prevState.pageCount + 1 ,
        // page:"&page=" + resp.nextPage
    })
  
  }
  this.props.iprogress(100);
  }
     
 

  render() {
    let {...props}=this.props;
    return (
      <>
       <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMoreData}
      hasMore={this.state.hasMore}
      loader={<Spinner/>}
      endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
    >
      {this.state.loading && <Spinner/>}
    
      
      <div className=" row mt-10 mx-0 justify-items-center" style={{"marginTop":"150px"}}>
        {<div className="main-heading"  style={props.mode=='dark'?{color:"white"}:{color:'#8f0d0d'}}>{this.state.articles==result?'Data Cannot Fetch ..Breaking News-Data from default API':'Breaking News-Data from '+this.props.title +'--Result--'+this.state.totalResult }</div>}
      { this.state.articles.map((element)=>{
          return <NewItem key= {element.article_id} publish={this.state.articles==result?element.pubDate:element.published} source={this.state.articles==result?element.source_name:element.source_category} title={element.title?(element.title.length<=45?element.title:element.title.slice(0,45)+"..."):""} description={element.description?(element.description.length<=85?element.description:element.description.slice(0,85)+"...."):""} imageUrl={this.state.articles==result?element.image_url:element.image} btnLink={this.state.articles==result?element.link:element.url}  mode={props.mode} stylemodify={props.stylemodi}/>
        })

      }
      </div>
      </InfiniteScroll>
  

      {/* {this.state.loading && <Spinner/>} */}
      <div className=" row mt-5 mx-0">
        {/* {!this.state.loading && <div className="main-heading"  style={props.mode=='dark'?{color:"white"}:{color:'#0c0b59'}}>{this.state.articles==result?'Data Cannot Fetch ..Breaking News-Data from default API':'Breaking News-Data from '+this.props.title +'--Result--'+this.state.totalResult}</div>} */}
        
        
        {/* { this.state.articles.map((element)=>{
          return <NewItem key= {element.article_id} publish={element.publishedAt} source={element.source?.name} title={element.title?(element.title.length<=45?element.title:element.title.slice(0,45)+"..."):""} description={element.description?(element.description.length<=85?element.description:element.description.slice(0,85)+"...."):""} imageUrl={this.state.articles==result?element.image_url:element.urlToImage} btnLink={this.state.articles==result?element.link:element.url}  mode={props.mode} stylemodify={props.stylemodi}/>
        })

      } */}

        {/* <div className="row mt-5 mb-5 mx-8 justify-content-center">
           <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1 col-1`} onClick={this.handlePreviousClicks} disabled={this.state.pageCount==1}>{"< Previous"}</button>
      <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1 col-1`} onClick={this.handleNextClicks} disabled={this.state.pageCount>=Math.ceil(this.state.totalResult/4) || this.state.articles==result} >{"Next >"}</button>
        </div> */}
      </div>
      </>
    )
  }
}      
