# keyword-relevance

An [ObjectiveAI](https://objective-ai.io) Function for keyword-based relevance scoring using ensemble LLM voting.

> **ObjectiveAI** is a platform for scoring, ranking, and simulating preferences using ensembles of LLMs. Learn more at [objective-ai.io](https://objective-ai.io) or see the [GitHub repository](https://github.com/ObjectiveAI/objectiveai).

## Overview

This function evaluates how relevant a piece of content is to a set of keywords, returning a score between 0 and 1. It combines two different evaluation strategies for more robust results:

1. **Joined** (`keyword-relevance-joined`) - Evaluates all keywords together in a single prompt
2. **Split** (`keyword-relevance-split`) - Evaluates each keyword independently

The final score is the average of both strategies.

## Input

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `keywords` | `string[]` | Yes | Keywords to evaluate relevance against (minimum 1) |
| `content` | `string \| image \| video \| audio \| file \| array` | Yes | Content to evaluate for relevance |

### Supported Content Types

- **Text** - Plain text strings
- **Image** - Image content
- **Video** - Video content
- **Audio** - Audio content
- **File** - File content
- **Array** - Multiple content pieces of any of the above types

## Output

A scalar value between 0 and 1:

| Score | Interpretation |
|-------|----------------|
| 1.0 | Extremely relevant to all keywords |
| 0.5 | Somewhat relevant |
| 0.0 | Not relevant |

## Example

```json
{
  "input": {
    "keywords": ["artificial intelligence", "machine learning", "automation"],
    "content": "Deep learning models are transforming how businesses automate complex decision-making processes."
  }
}
```

## How It Works

1. Passes input to `keyword-relevance-joined` (single evaluation with all keywords)
2. Passes input to `keyword-relevance-split` (separate evaluation per keyword)
3. Averages both results for the final score

This dual-strategy approach provides more reliable scoring by balancing:
- **Holistic evaluation** (joined) - Considers keyword relationships and overall thematic fit
- **Granular evaluation** (split) - Ensures each keyword is individually assessed

## Default Profile

The default profile delegates to the sub-functions' profiles:
- `keyword-relevance-joined` uses an ensemble where reasoning models have higher weights
- `keyword-relevance-split` uses an ensemble with equal weights across all models

## Related Functions

- [WiggidyW/keyword-relevance-joined](https://github.com/WiggidyW/keyword-relevance-joined) - Single-prompt evaluation
- [WiggidyW/keyword-relevance-split](https://github.com/WiggidyW/keyword-relevance-split) - Per-keyword evaluation
