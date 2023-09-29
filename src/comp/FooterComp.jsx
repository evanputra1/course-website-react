import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const FooterComp = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg='5' className='footer-desc'>
            <h3 className='fw-bold'>Ayo Ngoding</h3>
            <p className='desc'>Tempat belajar coding dengan kurikulum industri. Ambil sertifikasi serta kesempatan kerja di berbagai perusahaan.</p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+62 851-2345-6789</p>
              </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                <p className='m-0'>person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className='nav-footer d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
            <h5 className='fw-bold'>Menu</h5>
            <Link to=''>Home</Link>
            <Link to='kelas'>Kelas</Link>
            <Link to='testimoni'>Testimoni</Link>
            <Link to='faq'>FAQ</Link>
            <Link to='ketentuan'>Syarat & Ketentuan</Link>
          </Col>
          <Col lg='4' className='subs-footer mt-lg-0 mt-5'>
            <h5 className='fw-bold mb-3'>Subscribe untuk info menarik</h5>
            <div className='subscribe'>
              <input type="text" placeholder='Subscribe...' />
              <button className='btn btn-danger rounded ms-2'>Subscribe</button>
            </div>
            <div className='social mt-3'>
              <a href="https://www.facebook.com/evan.putra.90663" target='_blank' rel="noreferrer">
                <i className='fa-brands fa-facebook'></i>
              </a>
              <a href="https://github.com/evanputra1" target='_blank' rel="noreferrer">
                <i className='fa-brands fa-github'></i>
              </a>
              <a href="https://www.linkedin.com/in/evan-ananda-putra-056176222/" target='_blank' rel="noreferrer">
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href="https://www.instagram.com/evan._putra/" target='_blank' rel="noreferrer">
                <i className='fa-brands fa-instagram'></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'>&copy; Copyright 2023 - <span className='fw-bold'>Evan Ananda Putra</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComp