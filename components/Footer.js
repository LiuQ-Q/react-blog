import '../public/style/components/footer.css';

const Footer = () => {
  return (
    <div className="footer-div">
      <div>Copyright © { new Date().getFullYear() } [liu7.xyz] All Rights Reserved.</div>
      <div>备案号：津ICP备20003045号-1</div>
    </div>
  )
}

export default Footer;