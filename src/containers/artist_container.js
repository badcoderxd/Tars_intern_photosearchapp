import React,{ Component } from 'react';


import { connect } from 'react-redux';
import { artistDetail,clearArtistDetail } from '../actions';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

class ArtistContainer extends Component {
   

    componentWillMount() {
        this.props.artistDetail(this.props.match.params.id)
        
    }

    componentWillUnmount(){
        this.props.clearArtistDetail();
    }
    
    artistTemplate = (data) => (
        data.artistData ? 
            <div className="artist_view">
                <div className="artist_background" style={{
                    background: `url(${data.artistData.urls.regular})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{data.artistData.alt_description}</div>
                </div>
                <div className="artist_description">
                    <p>{data.artistData.user.bio}</p>
                    <div className="tags">
                        <div>
                            <strong>username:</strong> {data.artistData.user.first_name} || likes:{data.artistData.likes}
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft:'8px'}}>Related Photos</div>
                <div className="artist_album_list">
                    {data.artistData.related_collections.results ?
                        data.artistData.related_collections.results.map((item,index) => (
                            <div key={item.id} className="albums">
                                <div className="cover" style={{
                                    background: `url(${item.preview_photos[0].urls.thumb})`
                                }}>
                                </div>

                            </div>
                        ))
                        : null
                    }
                </div>
            </div>
        :null

    )
    
    render(){
        console.log(this.props.artists)
        return (
            <div>
                {this.artistTemplate(this.props.artists)}
            </div>
        );
    }
};

function mapStateToProps(state){
    return {
        artists:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistDetail,clearArtistDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistContainer)