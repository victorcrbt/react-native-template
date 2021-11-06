declare namespace AlertComponent {
  type Props = {
    open: boolean;
    onCloseClick(): void;
    message: string | null;
  };
}
