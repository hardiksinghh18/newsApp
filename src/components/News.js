import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';


const News = (props) => {



    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalRestults] = useState(0)
    const [articleLength, setArticleLength] = useState(10)





    News.defaultProps = {
        country: 'in',
        pageSize: 30
    }

    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }


    const updateNews = async () => {



        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeyone}`
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeytwo}`
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikeytwo}&page=${page}&pageSize=${props.pageSize}`

        setLoading(true)
        let data = await fetch(url)
        props.setProgress(40)
        let parsedData = await data.json()

        props.setProgress(60)

        setArticles(parsedData.articles)
        setTotalRestults(parsedData.totalResults)
        setLoading(false)


        props.setProgress(100)
    }

    useEffect(() => {
        updateNews()
    }, [])

    const topclick = () => {
        window.scrollTo(0, 0)
    }



    // const fetchMoreData = async () => {
    //     setPage(page + 1)

    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27c4a737a8914eddbdc4db517f63a783&page=${page + 1}&pageSize=${props.pageSize}`
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ad6ec8ae1e445efb9290cac88ea640f&page=${page+1}&pageSize=${props.pageSize}`

    //     let data = await fetch(url)

    //     let parsedData = await data.json()



    //    setArticles(articles.concat(parsedData.articles))
    //     setTotalRestults(parsedData.totalResults)
    //     setArticleLength(articles.length)
    // }
    // let articleLength = articles?.length;
    return (
        <>
            <div className="flexitem categoryHeading">

                <h1>{props.categoryHeading} - Top News Headlines </h1>
            </div>


            {/* {articleLength && <InfiniteScroll
                dataLength={articleLength}
                next={fetchMoreData}
                hasMore={articleLength !== totalResults}
                loader={<Spinner />}
            > */}


                <div className="container">
                    <div className="row my-5"  >
                        {articles && articles.map((element) => {
                            return <div className="col-md-4 mb-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />

                            </div>
                        })}
                    </div>
                </div>
            {/* </InfiniteScroll>} */}

            <button className='topbutton btn btn-dark' onClick={topclick}>&uarr; </button>
        </>
    )

}

export default News







