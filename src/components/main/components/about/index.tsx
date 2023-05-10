import { TextWithFont } from "components/design/common/styled";
import { useRateLimits } from "hooks/useRateLimits";
import { Link, Modal, Progress } from "native-base";
import { sources } from "constants/sources";
import { useTheme } from "hooks/useTheme";
import { Spacing } from "./styled";

const About = (): JSX.Element => {
  const { rateLimits } = useRateLimits();
  const { theme } = useTheme();

  return (
    <Modal.Content backgroundColor={theme.screen.backgroundColor}>
      <Modal.CloseButton color={theme.textColor} />
      <Modal.Header
        backgroundColor={theme.screen.backgroundColor}
        fontWeight="bold"
        fontSize="xl"
      >
        <TextWithFont fontSize="lg">About</TextWithFont>
      </Modal.Header>
      <Modal.Body>
        <Spacing>
          <TextWithFont fontSize="md">About</TextWithFont>
        </Spacing>
        <Spacing>
          <TextWithFont fontSize="sm" style={{ textAlign: "justify" }}>
            N.A.S.A - Native astronomical scholar application is an excellent
            open source tool for anyone interested in space exploration and
            astronomy. It allows users to explore a vast collection of space
            related data and resources from nasa Open API with user-friendly
            interface. I believe it is also great application for practicing
            skills such as styling, testing, ci/cd and react native development
            itself. Also please take under consideration that some values could
            not be exactly valid or possibly rounded up for increased user
            experience.
          </TextWithFont>
        </Spacing>
        <Spacing>
          <TextWithFont fontSize="md">Rate Limits</TextWithFont>
        </Spacing>
        <Spacing>
          <TextWithFont fontSize="sm">
            Daily Picture:
            {`  ${rateLimits.dailyPictureRateLimit.remaining}/${rateLimits.dailyPictureRateLimit.limit}`}
          </TextWithFont>
          <Progress
            min={0}
            max={rateLimits.dailyPictureRateLimit.limit}
            value={rateLimits.dailyPictureRateLimit.remaining}
            bg={theme.rateLimitBackground}
            _filledTrack={{
              bg: theme.rateLimitTrack,
            }}
          />
        </Spacing>
        <Spacing>
          <TextWithFont fontSize="sm">
            Asteroids:
            {`  ${rateLimits.asteroidsRateLimit.remaining}/${rateLimits.asteroidsRateLimit.limit}`}
          </TextWithFont>
          <Progress
            min={0}
            max={rateLimits.asteroidsRateLimit.limit}
            value={rateLimits.asteroidsRateLimit.remaining}
            bg={theme.rateLimitBackground}
            _filledTrack={{
              bg: theme.rateLimitTrack,
            }}
          />
        </Spacing>
        <Spacing>
          <TextWithFont fontSize="md">Sources</TextWithFont>
        </Spacing>
        <Spacing>
          {sources.map((source: string) => {
            return (
              <Link href={source} key={source}>
                <TextWithFont fontSize="sm" underline>
                  {source}
                </TextWithFont>
              </Link>
            );
          })}
        </Spacing>
      </Modal.Body>
    </Modal.Content>
  );
};

export default About;
