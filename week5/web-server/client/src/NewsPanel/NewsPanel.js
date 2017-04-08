import './NewsPanel.css';

import React from 'react';

import NewsCard from '../NewsCard/NewsCard'

class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = {news:null};
    }

    componentDidMount() {
        this.loadMoreNews();
    }

    loadMoreNews(e) {
        let request = new Request('http://localhost:3000/news', {
            method: 'GET',
            cache: false});

        fetch(request)
            .then((res) => res.json())
            .then((news) => {
                this.setState({
                    news: this.state.news? this.state.news.concat(news) : news,
                });
            });
    }

    renderNews() {
        var news_list = this.state.news.map(function(news) {
            return(
                <a className='list-group-item' key={news.digest} href="#">
                    <NewsCard news={news}/>
                </a>
            );
        });
        return(
            <div className="container-fluid">
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.news) {
            return(
                <div>
                    {this.renderNews()}
                </div>
            );
        } else {
            return(
                <div>
                    <div id='msg-app-loading'>
                        Loading
                    </div>
                </div>
            );
        }
    }
}

export default NewsPanel;