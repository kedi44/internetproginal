namespace HasanAksoyAPI.Models
{
    public class ResultMessage
    {
        public bool Result { get; set; }
        public string Message { get; set; }
        public ResultMessage(bool result, string message = "")
        {
            Result = result;
            Message = message;
            if (string.IsNullOrEmpty(message))
            {
                Message = result ? "İşlem başarılı." : "Bir hata oluştur.";
            }
        }
    }

}