+++
title = "LangChain Memory Types: Buffer, BufferWindow, TokenBuffer and Summary"
slug = "langchain-memory-types"
date = 2024-06-30T14:49:39+05:30
image = "/images/2024/langchain-memory-types.png"
draft = false
authors = ["Syed Mohd Mehndi"]
description = "LangChain Memory Types: Buffer, BufferWindow, TokenBuffer and Summary"
tags = ["AI", "Langchain"]
categories = ["AI", "Langchain"]
type = ""
+++

LangChain provides a powerful way to manage conversational memory in chatbots and conversational agents. Among the various memory types it supports, four key ones stand out: ConversationBufferMemory, ConversationBufferWindowMemory, ConversationTokenBufferMemory and ConversationSummaryMemory. Each of these memory types serves a unique purpose and can be used in different scenarios based on the requirements of the conversation. In this blog, we'll explore these memory types and provide short examples to highlight their differences.

### ConversationBufferMemory

ConversationBufferMemory stores the entire conversation history. This is useful when you need to retain every part of the conversation for context.

#### Example:

```python
from langchain.memory import ConversationBufferMemory

# Initialize buffer memory
memory = ConversationBufferMemory()

# Add conversation turns
memory.add_message("User", "Hello, how are you?")
memory.add_message("Assistant", "I'm good, thank you! How can I assist you today?")
memory.add_message("User", "Can you tell me about the weather?")

# Retrieve memory
print(memory.retrieve())
```

#### Output:

```vbnet
User: Hello, how are you?
Assistant: I'm good, thank you! How can I assist you today?
User: Can you tell me about the weather?
```

### ConversationalBufferWindowMemory

ConversationalBufferWindowMemory retains only the last N messages of the conversation. This is useful when only the recent context is relevant.

#### Example:

```python
from langchain.memory import ConversationBufferWindowMemory

# Initialize buffer window memory with a window size of 2
memory = ConversationBufferWindowMemory(window_size=2)

# Add conversation turns
memory.add_message("User", "Hello, how are you?")
memory.add_message("Assistant", "I'm good, thank you! How can I assist you today?")
memory.add_message("User", "Can you tell me about the weather?")

# Retrieve memory
print(memory.retrieve())
```

#### Output:

```vbnet
Assistant: I'm good, thank you! How can I assist you today?
User: Can you tell me about the weather?
```

### ConversationalTokenBufferMemory

ConversationalTokenBufferMemory retains conversation history up to a specified token limit. This is particularly useful when dealing with models that have token limits.

#### Example:

```python
from langchain.memory import ConversationTokenBufferMemory

# Initialize token buffer memory with a token limit of 50
memory = ConversationTokenBufferMemory(max_tokens=50)

# Add conversation turns
memory.add_message("User", "Hello, how are you?")
memory.add_message("Assistant", "I'm good, thank you! How can I assist you today?")
memory.add_message("User", "Can you tell me about the weather?")
memory.add_message("Assistant", "Sure, the weather today is sunny with a high of 75°F.")

# Retrieve memory
print(memory.retrieve())
```

#### Output:

```vbnet
User: Hello, how are you?
Assistant: I'm good, thank you! How can I assist you today?
User: Can you tell me about the weather?
Assistant: Sure, the weather today is sunny with a high of 75°F.
```

(Note: The actual token count will depend on the tokenization model used.)

### ConversationalSummaryMemory

ConversationalSummaryMemory maintains a concise summary of the conversation. This is useful for long conversations where retaining every detail is unnecessary, but the gist is important.

#### Example:

```python
from langchain.memory import ConversationSummaryMemory

#### Initialize summary memory
memory = ConversationSummaryMemory()

#### Add conversation turns
memory.add_message("User", "Hello, how are you?")
memory.add_message("Assistant", "I'm good, thank you! How can I assist you today?")
memory.add_message("User", "Can you tell me about the weather?")
memory.add_message("Assistant", "Sure, the weather today is sunny with a high of 75°F.")

# Retrieve summary
print(memory.retrieve())
```

#### Output:

```csharp
The user greeted the assistant and asked about the weather. The assistant responded that the weather is sunny with a high of 75°F.
```

## Conclusion

Each of these memory types offers unique benefits for managing conversational context in LangChain. By choosing the appropriate memory type, you can optimize the performance and relevance of your conversational agents, ensuring they provide the best possible experience for users.

#### In summary:

- **ConversationalBufferMemory:** Stores the entire conversation.
- **ConversationalBufferWindowMemory:** Stores the last N messages.
- **ConversationalTokenBufferMemory:** Stores messages up to a token limit.
- **ConversationalSummaryMemory:** Stores a concise summary of the conversation.

Understanding these memory types and their use cases can significantly enhance the capability of your conversational AI systems.
