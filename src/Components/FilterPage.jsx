import React, { useContext } from 'react';
import Context from './context';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import { Link } from 'react-router-dom';


function FilterPage(props) {
    const state = useContext(Context);
    const catagory = props.match.params.catagory.charAt(0).toUpperCase() + props.match.params.catagory.substr(1).toLowerCase();

    return (
        <div className='container-fluid'>
            {state.state ?
            <Row>
                <Col md={2} className='bg-black sidebar sticky-top d-sm-none d-md-block'>
                    <Header />
                </Col>
                <Col sm={10}>
                    <h1 className='mt-5'>{catagory}</h1>
                    <Row>
                    {state.state.reducerNews.map(i => (
                        i.catagory === catagory &&
                        <Col md={4} key={i.id} className='mt-5'>
                        <div className='bg-grey'>
                        <Link className='td' to={{
                                pathname: `/fnews/${i.id}`,
                                data: [{img1: i.img1, img2: i.img2, img3: i.img3, title: i.title, body: i.body, catagory: i.catagory, login: i.login, time: i.time}],
                            }}>
                            <img src={i.img1} alt='img' className='img-fluid w-100' style={{height: '200px'}} />
                                <div className='mt-3 ml-3 mr-3'>
                                    {i.title.length < 25 ? 
                                        <h5 className='font-weight-bold wc text-dark'>{i.title}</h5> 
                                        :   <h5 className='font-weight-bold fs-1 text-dark'>{i.title.substring(0, 25)}...</h5>
                                    }
                                </div> 
                                <p className='text-justify ml-3 mr-3 wc fs-4 text-dark'>{i.body.substring(0, 80)}...</p>
                                <p className='mr-3 ml-3 fs-4 text-dark'>{i.catagory}</p>
                                <p className='mr-3 ml-3 fs-2 text-dark'>Автор: <b>{i.login}</b></p>
                                <p className='mr-3 ml-3 pb-3 fs-2 text-dark'><em>{i.time}</em></p>
                            </Link>   
                        </div>
                    </Col>
                    ))}
                    </Row>
                </Col>
            </Row>
                : <Redirect to='/' />
            }
        </div>
    )
}

export default FilterPage;


/*


{state.reducerNews.map(i => (
                                            i.catagory === catagory &&
                                                <div>
                                                <img src={i.img1} alt='text' />
                                                <p>{i.title}</p>
                                                <p>{i.body}</p>
                                                <p>{i.catagory}</p>
                                                <p>{i.login}</p>
                                                <p>{i.time}</p>
                                                </div>
                                        ))}


                                        */