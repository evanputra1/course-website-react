import {Container, Row, Col} from 'react-bootstrap';
import {testimonial} from '../data/index'

import FaqComp from '../comp/FaqComp';

const Testimoni = () => {
  return (
    <div className='testimoni-page'>
      <div className='testimoni'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Semua Testimoni</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, rerum.</p>
            </Col>
          </Row>
          <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1'>
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className='mb-5'>
                  <p className='desc shadow-sm'>{data.desc}</p>
                  <div className='people'>
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className='mb-1'>{data.name}</h5>
                      <p className='m-0 fw-bold'>{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComp />
    </div>
  )
}

export default Testimoni