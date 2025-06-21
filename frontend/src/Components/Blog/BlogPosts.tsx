import { ArrowOutward } from "@mui/icons-material";
import {
    Box,
    Button,
    Chip,
    Stack,
    Typography
} from "@mui/material";
import { toast } from "react-toastify";
import { useViewPort } from "../../Hooks";
import { dummyArticles, type IArticleCardProps } from "../../utils";

export const BlogPosts = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack
      direction="column"
      gap={isMobile ? 2 : 3}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems="center"
        width="100%"
        flexWrap="wrap"
        gap={isMobile ? 1 : 0}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          flex={isMobile ? "1 1 100%" : "initial"}
        >
          Latest Blog Posts
        </Typography>
        <Button
          variant="text"
          onClick={() => toast.error("No Posts to show currently")}
          endIcon={<ArrowOutward />}
          sx={{
            fontSize: isMobile ? "0.75rem" : "initial",
            px: isMobile ? 1 : 0,
            py: isMobile ? 0.5 : 0,
          }}
        >
          View All
        </Button>
      </Stack>
      <Stack
        overflow="auto"
        direction={isMobile ? "column" : "row"}
        width="100%"
        justifyContent="space-between"
        alignItems='center'
      >
        {dummyArticles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </Stack>
    </Stack>
  );
};

export const ArticleCard: React.FC<IArticleCardProps> = ({
  imageUrl,
  category,
  author,
  date,
  title,
}) => {
  const { isMobile } = useViewPort();

  return (
    <Stack
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        maxWidth: { xs: 320, sm: 350, md: 380 },
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: 180, sm: 200 },
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "rgba(255,255,255,0.8)",
              color: "text.primary",
              fontWeight: "bold",
            }}
          />
        )}
      </Box>

        <Stack direction="row" alignItems="center" gap={1} p={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight="bold"
          >
            {author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            •
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            maxHeight: isMobile ? "3.6em" : "4.8em",
          }}
        >
          {title}
        </Typography>
    </Stack>
  );
};
