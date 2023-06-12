UPDATE [dbo].[Category]
SET    [categoryID]=@categoryID,
       [categoryName]=@categoryName,
       [categoryDes]=@categoryDes,
       [categoryStatus]=@categoryStatus,
       [adminID]=@adminID
WHERE [categoryID]=@categoryID

SELECT [categoryID],
       [categoryName],
       [categoryDes],
       [categoryStatus],
       [adminID]
  FROM [dbo].[Category]
  WHERE [categoryID]=@categoryID