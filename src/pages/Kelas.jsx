import {Container, Row, Col} from 'react-bootstrap';
import {semuaKelas} from '../data/index'

import FaqComp from '../comp/FaqComp';

const Kelas = () => {
  return (
    <div className="kelas-page">
      <div className='kelas min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Semua Course</h1>
              <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
              {semuaKelas.map((course) => {
                return (
                  <Col key={course.id} className='shadow rounded' data-aos='fade-up' data-aos-duration='1000'>
                    <img src={course.image} className='mb-5 rounded-1' />
                    <div className='star mb-2 px-3'>
                      <i className={course.star1}></i>
                      <i className={course.star2}></i>
                      <i className={course.star3}></i>
                      <i className={course.star4}></i>
                      <i className={course.star5}></i>
                    </div>
                    <h5 className='mb-5 px-3'>{course.title}</h5>
                    <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                      <p className='m-0 fw-bold'>{course.price}</p>
                      <button className='btn btn-primary rounded-1'>{course.buy}</button>
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

export default Kelas