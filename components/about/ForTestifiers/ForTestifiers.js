import { Container, Row, Col } from "../../bootstrap"
import AboutPagesCard from "../../AboutPagesCard/AboutPagesCard"
import {
  WhyMAPLECardContent,
  BenefitsCardContent,
  ChallengeCardContent
} from "../ForTestifiersCardContent/ForTestifiersCardContent"
import { useAuth } from "components/auth"

const ForTestifiers = () => {
  const { authenticated } = useAuth()

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="fw-bold m-5">MAPLE for Testifiers</h1>
          <AboutPagesCard title="Why use MAPLE">
            <WhyMAPLECardContent />
          </AboutPagesCard>
          <AboutPagesCard title="What we offer">
            <BenefitsCardContent />
          </AboutPagesCard>
          {!authenticated && (
            <AboutPagesCard title="Get started with MAPLE today!">
              <ChallengeCardContent />
            </AboutPagesCard>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default ForTestifiers
