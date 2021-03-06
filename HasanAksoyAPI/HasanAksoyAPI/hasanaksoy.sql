USE [master]
GO
/****** Object:  Database [hasanaksoy]    Script Date: 09/05/2021 15:51:07 ******/
CREATE DATABASE [hasanaksoy]
 go
 
USE [hasanaksoy]
go
CREATE TABLE [dbo].[ADMIN](
	[adminid] [nvarchar](50) NULL,
	[adminpassword] [nvarchar](50) NULL,
	[licensenumberid] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_ADMIN] PRIMARY KEY CLUSTERED 
(
	[licensenumberid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CUSTOMER]    Script Date: 09/05/2021 15:51:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CUSTOMER](
	[customerid] [int] IDENTITY(1,1) NOT NULL,
	[customername] [nchar](10) NULL,
	[customerphonenumber] [nvarchar](50) NULL,
	[customeradress] [nchar](100) NULL,
	[customergame] [nchar](30) NULL,
	[gamename] [nchar](10) NULL,
	[customerpassword] [nvarchar](50) NULL,
 CONSTRAINT [PK_CUSTOMER] PRIMARY KEY CLUSTERED 
(
	[customerid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GAME]    Script Date: 09/05/2021 15:51:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GAME](
	[gameId] [nvarchar](50) NOT NULL,
	[gamename] [nchar](10) NULL,
	[licensenumber] [nvarchar](50) NULL,
	[gameprice] [numeric](5, 2) NULL,
 CONSTRAINT [PK_GAME] PRIMARY KEY CLUSTERED 
(
	[gameId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[INVOICE]    Script Date: 09/05/2021 15:51:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[INVOICE](
	[invoiceid] [nvarchar](50) NOT NULL,
	[gameid] [nvarchar](50) NULL,
	[invoicedate] [nvarchar](50) NULL,
 CONSTRAINT [PK_INVOICE] PRIMARY KEY CLUSTERED 
(
	[invoiceid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[ADMIN] ([adminid], [adminpassword], [licensenumberid]) VALUES (N'ad-1', N'123', N'123213-13123-13123')
SET IDENTITY_INSERT [dbo].[CUSTOMER] ON 

INSERT [dbo].[CUSTOMER] ([customerid], [customername], [customerphonenumber], [customeradress], [customergame], [gamename], [customerpassword]) VALUES (1, N'recep     ', N'5346985898', N'istanbul                                                                                            ', N'recep                         ', N'pubg      ', NULL)
INSERT [dbo].[CUSTOMER] ([customerid], [customername], [customerphonenumber], [customeradress], [customergame], [gamename], [customerpassword]) VALUES (2, N'recep2    ', N'53469858982', N'istanbul2                                                                                           ', N'recep2                        ', N'pubg2     ', N'şifree')
INSERT [dbo].[CUSTOMER] ([customerid], [customername], [customerphonenumber], [customeradress], [customergame], [gamename], [customerpassword]) VALUES (3, N'recep2    ', N'53469858982', N'istanbul2                                                                                           ', N'recep2                        ', N'pubg2     ', N'şifree')
SET IDENTITY_INSERT [dbo].[CUSTOMER] OFF
INSERT [dbo].[GAME] ([gameId], [gamename], [licensenumber], [gameprice]) VALUES (N'oy-1', N'knight    ', N'123', CAST(25.50 AS Numeric(5, 2)))
INSERT [dbo].[GAME] ([gameId], [gamename], [licensenumber], [gameprice]) VALUES (N'oy-3', N'knight    ', N'123', CAST(25.50 AS Numeric(5, 2)))
USE [master]
GO
ALTER DATABASE [hasanaksoy] SET  READ_WRITE 
GO
