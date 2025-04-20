import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Input,
  Field,
} from "@chakra-ui/react";
import { useWordCounter } from "@/context/WordCounterContext";

export const CharacterLimitComponent = () => {
  const { handleSetCharacterLimit } = useWordCounter();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="xs" fontSize="xs">
          Set Character Limit
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Set Character Limit</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Field.Root fontSize="0.8em">
                <Field.Label>Character Limit</Field.Label>
                <Input
                  placeholder="Enter character limit..."
                  size="xs"
                  onChange={handleSetCharacterLimit}
                />
              </Field.Root>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button>Save</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
